import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Divider, Footer, Loading } from "animal-island-ui";
import "./TownMap.less";

interface MapLocation {
    id: string;
    name: string;
    icon: string;
    animal: string;
    animalEmoji: string;
    desc: string;
    color: string;
    path?: string;
    sectionId?: string;
}

const locations: MapLocation[] = [
    {
        id: "home",
        name: "镇长小屋",
        icon: "🏠",
        animal: "饿梦",
        animalEmoji: "🦊",
        desc: "镇长饿梦的家，记录生活和思考的地方",
        color: "app-yellow",
        path: "/about",
    },
    {
        id: "library",
        name: "小镇图书馆",
        icon: "📚",
        animal: "猫头鹰",
        animalEmoji: "🦉",
        desc: "收藏了所有文章，从读书笔记到技术分享",
        color: "app-blue",
        sectionId: "posts",
    },
    {
        id: "shop",
        name: "唱片店",
        icon: "🎵",
        animal: "企鹅",
        animalEmoji: "🐧",
        desc: "音乐爱好者的聚集地，推荐好听的歌曲",
        color: "purple",
        sectionId: "posts",
    },
    {
        id: "square",
        name: "友谊广场",
        icon: "🤝",
        animal: "小熊",
        animalEmoji: "🐻",
        desc: "朋友们的站点，欢迎来做客",
        color: "app-green",
        path: "/friends",
    },
    {
        id: "board",
        name: "布告栏",
        icon: "❓",
        animal: "松鼠",
        animalEmoji: "🐿️",
        desc: "常见问题和小镇须知",
        color: "app-teal",
        sectionId: "faq",
    },
    {
        id: "beach",
        name: "月光海滩",
        icon: "🏖️",
        animal: "海鸥",
        animalEmoji: "🕊️",
        desc: "放松休息的地方，听听海浪声",
        color: "app-pink",
        path: "/",
    },
];

function TownMap() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "auto" });
        setIsLoading(true);
        const timer = setTimeout(() => setIsLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    const handleLocationClick = (loc: MapLocation) => {
        if (loc.path) {
            navigate(loc.path);
        } else if (loc.sectionId) {
            navigate("/");
            const sectionId = loc.sectionId;
            setTimeout(() => {
                document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
            }, 100);
        }
    };

    return (
        <div className="town-map-page">
            <Loading
                active={isLoading}
                style={{ position: "fixed", left: 0, top: 0, zIndex: 9999999, height: "100vh", width: "100vw" }}
            />
            <div className="town-map-back">
                <Button type="text" onClick={() => navigate("/")}>← 返回首页</Button>
            </div>

            <Card color="app-teal" className="town-map-hero">
                <h1>🗺️ 饿梦小镇地图</h1>
                <p>点击地标可以前往对应的地方，每个地方都有小动物居民哦！</p>
            </Card>

            <Divider type="wave-yellow" />

            <section className="town-map-section">
                <div className="town-map-grid">
                    {locations.map((loc) => (
                        <Card
                            key={loc.id}
                            color={loc.color as any}
                            className="town-map-card"
                            onClick={() => handleLocationClick(loc)}
                        >
                            <div className="town-map-card-icon">{loc.icon}</div>
                            <div className="town-map-card-name">{loc.name}</div>
                            <div className="town-map-card-animal">
                                <span className="town-map-card-animal-emoji">{loc.animalEmoji}</span>
                                <span className="town-map-card-animal-name">{loc.animal}的家</span>
                            </div>
                            <div className="town-map-card-desc">{loc.desc}</div>
                        </Card>
                    ))}
                </div>
            </section>

            <Divider type="line-teal" />

            <section className="town-map-section">
                <h2 className="town-map-section-title">小镇居民</h2>
                <div className="town-map-residents">
                    {locations.map((loc) => (
                        <div key={loc.id} className="town-map-resident">
                            <span className="town-map-resident-emoji">{loc.animalEmoji}</span>
                            <span className="town-map-resident-name">{loc.animal}</span>
                            <span className="town-map-resident-home">住在{loc.name}</span>
                        </div>
                    ))}
                </div>
            </section>

            <Footer type="sea" />
        </div>
    );
}

export default TownMap;
