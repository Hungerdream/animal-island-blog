import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Button,
    Card,
    Collapse,
    Divider,
    Footer,
    Modal,
    Phone,
    Switch,
    Typewriter,
} from "animal-island-ui";
import { posts, type BlogColor } from "../../posts";
import "./Home.less";

const skills: { name: string; color: BlogColor }[] = [
    { name: "Golang / Python / Js", color: "app-blue" },
    { name: "Linux", color: "app-green" },
    { name: "Shell", color: "app-pink" },
    { name: "音乐", color: "brown" },
    { name: "游戏", color: "app-teal" },
];

const stats: { label: string; value: string; color: BlogColor }[] = [
    { label: "文章数", value: String(posts.length), color: "app-yellow" },
    { label: "建站天数", value: String(Math.floor((Date.now() - new Date("2026-05-16").getTime()) / (1000 * 60 * 60 * 24))), color: "app-orange" },
    { label: "小镇居民", value: "6", color: "app-teal" },
    { label: "友情链接", value: "1", color: "yellow-green" },
];

function Home() {
    const navigate = useNavigate();
    const [introOpen, setIntroOpen] = useState(() => !localStorage.getItem("visited"));
    const [dark, setDark] = useState(false);
    const [heroReplay] = useState(0);
    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    const filteredPosts = selectedTag ? posts.filter((p) => p.tag === selectedTag) : posts;

    useEffect(() => {
        const hash = window.location.hash.replace("#", "");
        if (!hash) return;
        const target = document.getElementById(hash);
        if (target) {
            setTimeout(() => {
                target.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 100);
        }
    }, []);

    return (
        <div className={`blog ${dark ? "blog--dark" : ""}`}>
            <header className="blog-header">
                <div className="blog-header-brand">
                    <span className="blog-logo-mark">🌇</span>
                    <div className="blog-logo-text">
                        <div className="blog-logo-title">饿梦小镇</div>
                        <div className="blog-logo-sub">小镇居民的日记</div>
                    </div>
                </div>
                <nav className="blog-nav">
                    <div className="blog-nav-dropdown">
                        <a
                            href="#posts"
                            onClick={(e) => {
                                e.preventDefault();
                                document
                                    .getElementById("posts")
                                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                            }}
                        >
                            <span>📖</span>
                            文章
                        </a>
                        <div className="blog-nav-dropdown-menu">
                            {[
                                { tag: "Life", label: "生活日记", icon: "🏝️" },
                                { tag: "Code", label: "代码文档", icon: "⌨️" },
                                { tag: "Design", label: "工具分享", icon: "🧰" },
                                { tag: "Music", label: "音乐分享", icon: "🎧" },
                                { tag: "Thought", label: "读书笔记", icon: "📖" },
                            ].map((cat) => (
                                <a
                                    key={cat.tag}
                                    href={`#posts`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setSelectedTag(cat.tag);
                                        document
                                            .getElementById("posts")
                                            ?.scrollIntoView({ behavior: "smooth", block: "start" });
                                    }}
                                >
                                    <span>{cat.icon}</span>
                                    {cat.label}
                                </a>
                            ))}
                        </div>
                    </div>
                    {[
                        { id: "map", icon: "🗺️", label: "小镇地图", path: "/map" },
                        { id: "faq", icon: "💬", label: "FAQ" },
                        { id: "friends", icon: "🔗", label: "友链", path: "/friends" },
                        { id: "about", icon: "🌱", label: "关于我", path: "/about" },
                    ].map((item) => (
                        <a
                            key={item.id}
                            href={item.path || `#${item.id}`}
                            onClick={(e) => {
                                if (item.path) {
                                    e.preventDefault();
                                    navigate(item.path);
                                } else {
                                    e.preventDefault();
                                    document
                                        .getElementById(item.id)
                                        ?.scrollIntoView({ behavior: "smooth", block: "start" });
                                }
                            }}
                        >
                            <span>{item.icon}</span>
                            {item.label}
                        </a>
                    ))}
                </nav>
                <div className="blog-header-right">
                    <a
                        href="https://github.com/Hungerdream"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="blog-github-link"
                        title="GitHub"
                    >
                        <svg viewBox="0 0 16 16" width="20" height="20" fill="currentColor">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                        </svg>
                    </a>
                    <Switch
                        checked={dark}
                        onChange={setDark}
                        checkedChildren="🌙"
                        unCheckedChildren="☀️"
                    />
                </div>
            </header>

            <section className="blog-hero">
                <div className="blog-hero-text">
                    <div className="blog-hero-title">
                        <Typewriter speed={70} trigger={heroReplay}>
                            你好，我是饿梦。
                        </Typewriter>
                    </div>
                    <p className="blog-hero-sub">
                        <b> 这里记录小镇居民的日常,欢迎入住饿梦小镇。</b>
                        <br />
                        希望你会喜欢这里的一切。
                    </p>
                    <div className="blog-hero-actions">
                        <Button
                            type="primary"
                            size="large"
                            onClick={() => {
                                document
                                    .getElementById("posts")
                                    ?.scrollIntoView({ behavior: "smooth" });
                            }}
                        >
                            开始阅读
                        </Button>
                        <Button
                            type="text"
                            size="large"
                            onClick={() => navigate("/friends")}
                        >
                            友链 →
                        </Button>
                    </div>
                </div>
                <div className="blog-hero-phone">
                    <Phone />
                </div>
            </section>

            <Divider type="wave-yellow" />

            <section className="blog-section">
                <div className="blog-stats">
                    {stats.map((s) => (
                        <Card key={s.label} color={s.color}>
                            <div className="blog-stat">
                                <div className="blog-stat-value">{s.value}</div>
                                <div className="blog-stat-label">{s.label}</div>
                            </div>
                        </Card>
                    ))}
                </div>
            </section>

            <Divider type="line-teal" />

            <section id="about" className="blog-section">
                <h2 className="blog-section-title">关于我</h2>
                <Card color="app-yellow" onClick={() => navigate("/about")} className="blog-about-card">
                    <div className="blog-about-inner">
                        <div className="blog-avatar">🐦</div>
                        <div>
                            <h3>饿梦 · DevOps / 独立开发者</h3>
                            <p>
                                目前还没有值得上给大家介绍的技术，努力学习中......
                            </p>
                            <div className="blog-skills">
                                {skills.map((s) => (
                                    <Card key={s.name} type="title" color={s.color}>
                                        {s.name}
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>

                </Card>
            </section>

            <Divider type="line-brown" />

            <section id="posts" className="blog-section">
                <h2 className="blog-section-title">最新文章</h2>
                <p className="blog-section-sub">最近在想的事、踩过的坑、做过的实验。</p>
                {selectedTag && (
                    <div className="blog-filter-tag">
                        <span>当前分类：{selectedTag}</span>
                        <Button type="text" onClick={() => setSelectedTag(null)}>显示全部</Button>
                    </div>
                )}
                <div className="blog-posts-grid">
                    {filteredPosts.map((post) => (
                        <Card
                            key={post.id}
                            color={post.color}
                            onClick={() => navigate(`/posts/${post.id}`)}
                            className="blog-post-card"
                        >
                            <div className="blog-post-tag">#{post.tag}</div>
                            <h3 className="blog-post-title">{post.title}</h3>
                            <p className="blog-post-excerpt">{post.excerpt}</p>
                            <div className="blog-post-meta">
                                <span>{post.date}</span>
                                <span className="blog-post-more">阅读 →</span>
                            </div>
                        </Card>
                    ))}
                </div>
            </section>

            <Divider type="line-white" />

            <section id="faq" className="blog-section">
                <h2 className="blog-section-title">常见问题</h2>
                <div className="blog-faq">
                    <Collapse
                        defaultExpanded
                        question="关于镇长"
                        answer="我是饿梦，饿梦小镇的镇长，很喜欢音乐和旅行"
                    />
                    <Collapse
                        question="为什么叫「饿梦小镇」？"
                        answer="因为想要这里和一个小镇一样，住在这里，就像是互联网上的一处虚拟小镇。"
                    />
                </div>
            </section>

            <Footer type="sea" />
            {/* 首次访问：游戏风格打字机欢迎弹窗 */}
            <Modal
                open={introOpen}
                title="欢迎来到饿梦小镇"
                onClose={() => setIntroOpen(false)}
                onOk={() => setIntroOpen(false)}
                typewriter
                typeSpeed={60}
                footer={
                    <>
                        <Button onClick={() => { setIntroOpen(false); localStorage.setItem("visited", "1"); }}>稍后再看</Button>
                        <Button type="primary" onClick={() => { setIntroOpen(false); localStorage.setItem("visited", "1"); }}>
                            开始探索
                        </Button>
                    </>
                }
            >
                你好，旅人。这里是饿梦的个人博客。
                这里每张卡片都是一个想法，
                每条分隔线的尽头都是一段新的旅程。
            </Modal>
        </div>
    );
}

export default Home;
