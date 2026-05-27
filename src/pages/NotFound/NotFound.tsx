import { useNavigate } from "react-router-dom";
import { Button, Card, Footer } from "animal-island-ui";

function NotFound() {
    const navigate = useNavigate();

    return (
        <div style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 16px",
        }}>
            <Card color="app-yellow" style={{ textAlign: "center", maxWidth: 400 }}>
                <div style={{ fontSize: 64, marginBottom: 16 }}>🏝️</div>
                <h1 style={{
                    fontSize: 48,
                    fontWeight: 800,
                    margin: "0 0 8px",
                    color: "#725d42",
                }}>
                    404
                </h1>
                <p style={{
                    fontSize: 16,
                    color: "#8a7b66",
                    margin: "0 0 24px",
                    lineHeight: 1.6,
                }}>
                    哎呀，你漂到了一座未知的小岛。
                    <br />
                    这里什么都没有，只有海浪声...
                </p>
                <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
                    <Button type="primary" onClick={() => navigate("/")}>
                        回到小镇
                    </Button>
                    <Button onClick={() => navigate(-1)}>
                        返回上一页
                    </Button>
                </div>
            </Card>
            <Footer type="sea" />
        </div>
    );
}

export default NotFound;
