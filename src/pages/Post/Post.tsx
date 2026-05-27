import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Card, Divider, Footer, Loading } from "animal-island-ui";
import { getPostById, posts } from "../../posts";
import "./Post.less";

function Post() {
    const { id = "" } = useParams();
    const navigate = useNavigate();
    const post = getPostById(id);
    const [isLoading, setIsLoading] = useState(true);
    const [activeHeading, setActiveHeading] = useState("");

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "auto" });
        setIsLoading(true);
        const timer = setTimeout(() => setIsLoading(false), 1500);
        return () => clearTimeout(timer);
    }, [id]);

    useEffect(() => {
        if (!post) return;
        const headings = document.querySelectorAll(".post-body h2");
        if (headings.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveHeading(entry.target.textContent || "");
                    }
                });
            },
            { rootMargin: "-80px 0px -70% 0px" }
        );

        headings.forEach((h) => observer.observe(h));
        return () => observer.disconnect();
    }, [post, isLoading]);

    if (!post) {
        return (
            <div className="post-page">
                <Button onClick={() => navigate("/")}>← 返回首页</Button>
                <Card color="app-pink">
                    <h2>文章未找到</h2>
                    <p>您要找的文章可能不存在或已被删除。</p>
                </Card>
            </div>
        );
    }

    const currentIndex = posts.findIndex((p) => p.id === post.id);
    const prev = currentIndex > 0 ? posts[currentIndex - 1] : null;
    const next = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

    return (
        <div className="post-page">
            <Loading
                active={isLoading}
                style={{ position: "fixed", left: 0, top: 0, zIndex: 9999999, height: "100vh", width: "100vw" }} />
            <div className="post-back">
                <Button type="text" onClick={() => navigate("/")}>← 返回文章列表</Button>
            </div>

            <Card color={post.color} className="post-hero">
                <div className="post-hero-cover">{post.cover}</div>
                <div className="post-hero-text">
                    <span className="post-tag">#{post.tag}</span>
                    <h1>{post.title}</h1>
                    <div className="post-meta">
                        <span>🗓 {post.date}</span>
                        <span>⏱ {post.readTime}</span>
                    </div>
                </div>
            </Card>

            <p className="post-excerpt">{post.excerpt}</p>

            <Divider type="line-teal" />

            <div className="post-layout">
                <article className="post-body">
                    {post.sections.map((section) => (
                        <section key={section.heading}>
                            <h2>{section.heading}</h2>
                            {section.paragraphs.map((p, i) => (
                                <p key={i}>{p}</p>
                            ))}
                        </section>
                    ))}
                </article>

                <aside className="post-toc">
                    <div className="post-toc-title">此页内容 📄</div>
                    <ul>
                        {post.sections.map((section) => (
                            <li
                                key={section.heading}
                                className={activeHeading === section.heading ? "active" : ""}
                            >
                                <a
                                    href={`#${section.heading}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        const headings = document.querySelectorAll(".post-body h2");
                                        headings.forEach((h) => {
                                            if (h.textContent === section.heading) {
                                                h.scrollIntoView({ behavior: "smooth", block: "start" });
                                            }
                                        });
                                    }}
                                >
                                    {section.heading}
                                </a>
                            </li>
                        ))}
                    </ul>
                </aside>
            </div>

            <Card color="app-yellow" className="post-takeaways">
                <h3>🌿 本文要点</h3>
                <ul>
                    {post.takeaways.map((t) => (
                        <li key={t}>{t}</li>
                    ))}
                </ul>
            </Card>

            <Divider type="wave-yellow" />

            <div className="post-nav">
                {prev ? (
                    <Button onClick={() => navigate(`/posts/${prev.id}`)}>
                        ← {prev.title}
                    </Button>
                ) : <span />}
                {next ? (
                    <Button type="primary" onClick={() => navigate(`/posts/${next.id}`)}>
                        {next.title} →
                    </Button>
                ) : <span />}
            </div>

            <div className="post-spacer" />
            <Footer type="tree" className="post-footer" />
        </div>
    );
}

export default Post;
