import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Divider, Footer, Loading } from "animal-island-ui";
import Giscus from "../../components/Giscus";
import "./Friends.less";

const friends: { name: string; url: string; desc: string; avatar: string }[] = [
    { name: "Hungerdream", url: "https://emdream.icu", desc: "声屿", avatar: "🐻" },
];

function Friends() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "auto" });
        setIsLoading(true);
        const timer = setTimeout(() => setIsLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="friends-page">
            <Loading
                active={isLoading}
                style={{ position: "fixed", left: 0, top: 0, zIndex: 9999999, height: "100vh", width: "100vw" }}
            />
            <div className="friends-back">
                <Button type="text" onClick={() => navigate("/")}>← 返回首页</Button>
            </div>

            <Card color="app-teal" className="friends-hero">
                <h1>🔗 友情链接</h1>
                <p>这些是我在互联网上的朋友们，欢迎逛逛他们的站点。</p>
            </Card>

            <Divider type="line-teal" />

            <section className="friends-section">
                <h2 className="friends-section-title">小镇信息</h2>
                <Card color="default">
                    <div className="town-info">
                        <p><strong>小镇名：</strong>饿梦小镇</p>
                        <p><strong>镇长：</strong>饿梦</p>
                        <p><strong>建站时间：</strong>2026年</p>
                    </div>
                </Card>
            </section>

            <Divider type="wave-yellow" />

            <section className="friends-section">
                <h2 className="friends-section-title">申请方法</h2>
                <Card color="app-yellow">
                    <div className="apply-info">
                        <p>添加本站后，在本页留言，格式如下：</p>
                        <pre className="apply-code">
                            {`- name: #您的名字
  url: #您的网址
  desc: #简短描述
  image: #一张图片`}
                        </pre>
                    </div>
                </Card>
            </section>

            <Divider type="line-brown" />

            <section className="friends-section">
                <h2 className="friends-section-title">小伙伴们</h2>
                <div className="friends-grid">
                    {friends.map((f) => (
                        <Card
                            key={f.name}
                            color="app-blue"
                            className="friend-card"
                            onClick={() => window.open(f.url, "_blank")}
                        >
                            <div className="friend-avatar">{f.avatar}</div>
                            <div className="friend-info">
                                <h3>{f.name}</h3>
                                <p>{f.desc}</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </section>

            <Divider type="line-teal" />
            <section className="friends-section">
                <h2 className="friends-section-title">留言板</h2>
                <Card color="default">
                    <Giscus />
                </Card>
            </section>

            <Footer type="sea" />
        </div>
    );
}

export default Friends;
