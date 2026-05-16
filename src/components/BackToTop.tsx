import { useEffect, useState } from "react";

function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setVisible(window.scrollY > 300);
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if (!visible) return null;

    return (
        <button
            onClick={handleClick}
            title="回到顶部"
            style={{
                position: "fixed",
                bottom: 32,
                right: 32,
                width: 44,
                height: 44,
                borderRadius: "50%",
                border: "none",
                background: "#19c8b9",
                color: "#fff",
                fontSize: 20,
                cursor: "pointer",
                boxShadow: "0 4px 12px rgba(25, 200, 185, 0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.2s",
                zIndex: 9999,
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 6px 16px rgba(25, 200, 185, 0.4)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(25, 200, 185, 0.3)";
            }}
        >
            ↑
        </button>
    );
}

export default BackToTop;
