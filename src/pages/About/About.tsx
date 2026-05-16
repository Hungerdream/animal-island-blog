import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Divider, Footer, Loading } from "animal-island-ui";
import type { BlogColor } from "../Home/posts";
import "./About.less";

const skills: { name: string; color: BlogColor }[] = [
    { name: "Golang / Python / Js", color: "app-blue" },
    { name: "Linux", color: "app-green" },
    { name: "Shell", color: "app-pink" },
    { name: "音乐", color: "brown" },
    { name: "游戏", color: "app-teal" },
];

const timeline: { year: string; title: string; desc: string; color: BlogColor }[] = [
    { year: "2022", title: "开始学编程", desc: "从零开始学习，接触 Linux云计算和大数据，开始打比赛。", color: "app-blue" },
    { year: "2024", title: "深入 DevOps", desc: "学习 Linux、Docker、CI/CD，开始折腾服务器。", color: "app-green" },
    { year: "2026", title: "独立开发", desc: "开始做自己的项目，写博客记录学习过程。", color: "app-yellow" },
];

function About() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "auto" });
        setIsLoading(true);
        const timer = setTimeout(() => setIsLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="about-page">
            <Loading
                active={isLoading}
                style={{ position: "fixed", left: 0, top: 0, zIndex: 9999999, height: "100vh", width: "100vw" }}
            />
            <div className="about-back">
                <Button type="text" onClick={() => navigate("/")}>← 返回首页</Button>
            </div>

            <Card color="app-yellow" className="about-hero">
                <div className="about-hero-inner">
                    <div className="about-avatar">🐦</div>
                    <div className="about-hero-text">
                        <h1>饿梦</h1>
                        <p className="about-role">DevOps / 独立开发者</p>
                        <p className="about-bio">
                            目前还没有值得上给大家介绍的技术，努力学习中......
                        </p>
                    </div>
                </div>
            </Card>

            <Divider type="line-teal" />

            <section className="about-section">
                <h2 className="about-section-title">技能</h2>
                <div className="about-skills">
                    {skills.map((s) => (
                        <Card key={s.name} type="title" color={s.color}>
                            {s.name}
                        </Card>
                    ))}
                </div>
            </section>

            <Divider type="wave-yellow" />

            <section className="about-section">
                <h2 className="about-section-title">时间线</h2>
                <div className="about-timeline">
                    {timeline.map((item) => (
                        <Card key={item.year} color={item.color} className="about-timeline-card">
                            <div className="about-timeline-year">{item.year}</div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </Card>
                    ))}
                </div>
            </section>

            <Divider type="line-brown" />

            <section className="about-section">
                <h2 className="about-section-title">关于这个博客</h2>
                <Card color="default">
                    <p>
                        这个博客使用 React 19 + Vite + animal-island-ui 构建，
                        是一个记录学习、生活和思考的地方。
                    </p>
                    <p>
                        博客名叫「饿梦小镇」，灵感来自动物森友会。
                        希望这里能像一座安静的小镇，放慢脚步，慢慢成长。
                    </p>
                </Card>
            </section>

            <Footer type="sea" />
        </div>
    );
}

export default About;
