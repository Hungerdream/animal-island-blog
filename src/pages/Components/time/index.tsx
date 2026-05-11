import { Time } from "animal-island-ui";
import ComponentShowcase from "../../../components/ComponentShowcase/ComponentShowcase";
import type { ComponentPageConfig } from "../../../types";

const config: ComponentPageConfig = {
    name: "Time",
    chineseName: "時刻",
    description: "現在時刻を表示する装飾的なコンポーネント。",
    demos: [
        {
            title: "基本的な使い方",
            description: "現在時刻を表示します。",
            content: <Time />,
        },
    ],
    props: [
        { name: "className", type: "string", default: "-", description: "カスタムクラス名" },
    ],
};

function TimePage() {
    return <ComponentShowcase {...config} />;
}

export default TimePage;
