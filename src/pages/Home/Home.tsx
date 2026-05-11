import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Button,
    Card,
    Collapse,
    Divider,
    Footer,
    Input,
    Modal,
    Phone,
    Switch,
    Typewriter,
} from "animal-island-ui";
import { posts, type BlogColor } from "./posts";
import "./Home.less";

const skills: { name: string; color: BlogColor }[] = [
    { name: "React / TS", color: "app-blue" },
    { name: "Node.js", color: "app-green" },
    { name: "UIデザイン", color: "app-pink" },
    { name: "アニメーション / Motion", color: "purple" },
    { name: "コーヒー", color: "brown" },
    { name: "釣り", color: "app-teal" },
];

const stats: { label: string; value: string; color: BlogColor }[] = [
    { label: "記事数", value: "42", color: "app-yellow" },
    { label: "月間購読者", value: "1.2k", color: "app-orange" },
    { label: "島の住人", value: "7", color: "app-teal" },
    { label: "OSSスター", value: "820", color: "yellow-green" },
];

function Home() {
    const navigate = useNavigate();
    const [introOpen, setIntroOpen] = useState(true);
    const [email, setEmail] = useState("");
    const [emailTouched, setEmailTouched] = useState(false);
    const [subscribed, setSubscribed] = useState(false);
    const [weeklyDigest, setWeeklyDigest] = useState(true);
    const [dark, setDark] = useState(false);
    const [heroReplay] = useState(0);

    const emailInvalid = emailTouched && email.length > 0 && !email.includes("@");

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

    const handleSubscribe = () => {
        setEmailTouched(true);
        if (!email.includes("@")) return;
        setSubscribed(true);
    };

    return (
        <div className={`blog ${dark ? "blog--dark" : ""}`}>
            <header className="blog-header">
                <div className="blog-header-brand">
                    <span className="blog-logo-mark">🌿</span>
                    <div className="blog-logo-text">
                        <div className="blog-logo-title">KAI&apos;s Island</div>
                        <div className="blog-logo-sub">notes from a quiet shore</div>
                    </div>
                </div>
                <nav className="blog-nav">
                    {[
                        { id: "posts", icon: "📖", label: "記事" },
                        { id: "about", icon: "🌱", label: "自己紹介" },
                        { id: "faq", icon: "💬", label: "FAQ" },
                        { id: "contact", icon: "✉️", label: "購読" },
                    ].map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            onClick={(e) => {
                                e.preventDefault();
                                document
                                    .getElementById(item.id)
                                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                            }}
                        >
                            <span>{item.icon}</span>
                            {item.label}
                        </a>
                    ))}
                </nav>
                <div className="blog-header-right">
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
                            こんにちは、無人島でコードを書く Kai です。
                        </Typewriter>
                    </div>
                    <p className="blog-hero-sub">
                        ここでは <b>コード</b>、<b>デザイン</b>、<b>暮らし</b> についての観察を記録しています。
                        バズりも、慌ただしさもなく、ただゆっくり育つアイデアだけがあります。
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
                            読み始める
                        </Button>
                        <Button
                            type="text"
                            size="large"
                            onClick={() => {
                                document
                                    .getElementById("contact")
                                    ?.scrollIntoView({ behavior: "smooth" });
                            }}
                        >
                            更新を購読 →
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
                <h2 className="blog-section-title">自己紹介</h2>
                <Card color="app-yellow">
                    <div className="blog-about-inner">
                        <div className="blog-avatar">🦊</div>
                        <div>
                            <h3>Kai · フロントエンド / 独立開発者</h3>
                            <p>
                                昼はコンポーネントライブラリを書き、夜は釣りをする。「手触りのあるソフトウェア」と
                                「一目で理解できるコード」が好き。バズらなかったOSSをいくつか作ったこともあるし、3日だけバズったOSSを作ったこともある。
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
                <h2 className="blog-section-title">最新の記事</h2>
                <p className="blog-section-sub">最近考えていること、つまずいたこと、試してみた実験。</p>
                <div className="blog-posts-grid">
                    {posts.map((post) => (
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
                                <span className="blog-post-more">読む →</span>
                            </div>
                        </Card>
                    ))}
                </div>
            </section>

            <Divider type="line-white" />

            <section id="faq" className="blog-section">
                <h2 className="blog-section-title">よくある質問</h2>
                <div className="blog-faq">
                    <Collapse
                        defaultExpanded
                        question="ブログの更新頻度は？"
                        answer="およそ週1〜2本。流行を追わず、書き終えて「公開する価値がある」と思ったものだけを出します。"
                    />
                    <Collapse
                        question="記事を転載してもいいですか？"
                        answer="非商用であれば出典を明記すればOK、商用の場合は事前にご連絡ください。コード例はデフォルトで MIT です。"
                    />
                    <Collapse
                        question="どんな技術スタックを使っていますか？"
                        answer="ブログ本体は React 19 + Vite + animal-island-ui。記事の編集は Obsidian、デプロイは Vercel です。"
                    />
                    <Collapse
                        question="なぜ「無人島」と呼ぶのですか？"
                        answer="更新を急かす人がいない場所が欲しかったからです。"
                    />
                </div>
            </section>

            <Divider type="line-yellow" />

            <section id="contact" className="blog-section">
                <h2 className="blog-section-title">更新を購読する</h2>
                <p className="blog-section-sub">
                    メールアドレスを残していただければ、新しい記事をいち早くお届けします。広告はなく、転売もせず、いつでも解除できます。
                </p>
                <Card color="app-pink">
                    {subscribed ? (
                        <div className="blog-subscribe-done">
                            🎉 ありがとうございます！<b>{email}</b> をメールリストに追加しました。
                            <br />
                            <Button
                                type="link"
                                onClick={() => {
                                    setSubscribed(false);
                                    setEmail("");
                                    setEmailTouched(false);
                                }}
                            >
                                もう一つのメールを登録する
                            </Button>
                        </div>
                    ) : (
                        <>
                            <div className="blog-subscribe-row">
                                <Input
                                    size="large"
                                    placeholder="your@email.com"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        setEmailTouched(true);
                                    }}
                                    allowClear
                                    status={emailInvalid ? "error" : undefined}
                                    suffix={emailInvalid ? "形式エラー" : undefined}
                                />
                                <Button
                                    type="primary"
                                    size="large"
                                    htmlType="submit"
                                    onClick={handleSubscribe}
                                >
                                    購読
                                </Button>
                            </div>
                            <div className="blog-subscribe-opt">
                                <Switch
                                    checked={weeklyDigest}
                                    onChange={setWeeklyDigest}
                                    checkedChildren="週報"
                                    unCheckedChildren="新着のみ"
                                />
                                <span>
                                    {weeklyDigest
                                        ? "毎週金曜に「今週のピックアップ」も配信"
                                        : "新しい記事が出たときだけ通知"}
                                </span>
                            </div>
                        </>
                    )}
                </Card>
            </section>

            <Footer type="sea" />
            {/* 初回訪問：ゲーム風タイプライター歓迎モーダル */}
            <Modal
                open={introOpen}
                title="無人島へようこそ"
                onClose={() => setIntroOpen(false)}
                onOk={() => setIntroOpen(false)}
                typewriter
                typeSpeed={60}
                footer={
                    <>
                        <Button onClick={() => setIntroOpen(false)}>後で見る</Button>
                        <Button type="primary" onClick={() => setIntroOpen(false)}>
                            探索を始める
                        </Button>
                    </>
                }
            >
                こんにちは、旅人。ここは <strong>KaKa</strong> の個人ブログです。
                ここでは、一枚一枚のカードがひとつの考えで、
                一本一本の区切り線の先には、新しい旅があります。
            </Modal>
        </div>
    );
}

export default Home;
