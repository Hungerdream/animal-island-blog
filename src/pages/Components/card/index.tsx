import { Card } from "animal-island-ui";
import ComponentShowcase from "../../../components/ComponentShowcase/ComponentShowcase";
import type { ComponentPageConfig } from "../../../types";
import "./card.less";

const colors = [
    "default",
    "app-pink",
    "purple",
    "app-blue",
    "app-yellow",
    "app-orange",
    "app-teal",
    "app-green",
    "app-red",
    "lime-green",
    "yellow-green",
    "brown",
    "warm-peach-pink",
] as const;

const config: ComponentPageConfig = {
    name: "Card",
    chineseName: "カード",
    description: "汎用的なカードコンテナ。どうぶつの森スタイルの13種類のカラーパレットを提供します。",
    demos: [
        {
            title: "基本的な使い方",
            description: "デフォルトのカード。",
            content: <Card>これはデフォルトのカードです 🌿</Card>,
        },
        {
            title: "カラープリセット",
            description: "Card コンポーネントには13種類のカラーパレットが組み込まれています。どうぶつの森からインスピレーションを得ています。",
            content: (
                <div className="card-color-grid">
                    {colors.map((color) => (
                        <Card key={color} color={color}>
                            <div className="card-color-item">{color}</div>
                        </Card>
                    ))}
                </div>
            ),
        },
        {
            title: "Title タイプ",
            description: "type='title' でタイトルカードとして使用できます。",
            content: (
                <>
                    <Card type="title" color="app-blue">タイトルカード</Card>
                    <Card type="title" color="app-green">緑のタイトル</Card>
                </>
            ),
        },
        {
            title: "クリック可能",
            description: "onClick 属性でカードをクリック可能にします。",
            content: (
                <Card color="app-yellow" onClick={() => alert("🎉 カードをクリックしました！")}>
                    クリックしてみてください 👆
                </Card>
            ),
        },
    ],
    props: [
        { name: "type", type: "'default' | 'title'", default: "'default'", description: "カードの種類" },
        { name: "color", type: "'default' | 'app-pink' | 'purple' | 'app-blue' | ...", default: "'default'", description: "背景色のプリセット。全13種類のカラー" },
        { name: "children", type: "ReactNode", default: "-", description: "カードの内容" },
        { name: "className", type: "string", default: "-", description: "カスタムクラス名" },
        { name: "style", type: "CSSProperties", default: "-", description: "カスタムスタイル" },
        { name: "onClick", type: "(e) => void", default: "-", description: "クリック時のコールバック" },
    ],
};

function CardPage() {
    return <ComponentShowcase {...config} />;
}

export default CardPage;
