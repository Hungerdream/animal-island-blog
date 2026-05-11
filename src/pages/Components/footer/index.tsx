import { Footer } from "animal-island-ui";
import ComponentShowcase from "../../../components/ComponentShowcase/ComponentShowcase";
import type { ComponentPageConfig } from "../../../types";

const config: ComponentPageConfig = {
    name: "Footer",
    chineseName: "フッター",
    description: "装飾的なフッターコンポーネント。海と森の2つのテーマを提供します。",
    demos: [
        {
            title: "海テーマ",
            description: "type='sea' で海スタイルのフッターを表示します。",
            content: <Footer type="sea" />,
        },
        {
            title: "森テーマ",
            description: "type='tree' で森スタイルのフッターを表示します。",
            content: <Footer type="tree" />,
        },
    ],
    props: [
        { name: "type", type: "'sea' | 'tree'", default: "-", description: "Footer のテーマ種類" },
        { name: "className", type: "string", default: "-", description: "カスタムクラス名" },
        { name: "style", type: "CSSProperties", default: "-", description: "カスタムスタイル" },
    ],
};

function FooterPage() {
    return <ComponentShowcase {...config} />;
}

export default FooterPage;
