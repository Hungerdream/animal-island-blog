import { Phone } from "animal-island-ui";
import ComponentShowcase from "../../../components/ComponentShowcase/ComponentShowcase";
import type { ComponentPageConfig } from "../../../types";

const config: ComponentPageConfig = {
    name: "Phone",
    chineseName: "スマートフォン",
    description: "スマートフォンスタイルの装飾的なコンテナコンポーネント。",
    demos: [
        {
            title: "基本的な使い方",
            description: "Phone コンポーネントのスタイルを表示します。",
            content: <Phone />,
        },
    ],
    props: [
        { name: "className", type: "string", default: "-", description: "カスタムクラス名" },
    ],
};

function PhonePage() {
    return <ComponentShowcase {...config} />;
}

export default PhonePage;
