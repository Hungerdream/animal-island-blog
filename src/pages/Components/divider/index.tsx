import { Divider } from "animal-island-ui";
import ComponentShowcase from "../../../components/ComponentShowcase/ComponentShowcase";
import type { ComponentPageConfig } from "../../../types";

const dividerTypes = [
    "line-brown",
    "line-teal",
    "line-white",
    "line-yellow",
    "wave-yellow",
] as const;

const config: ComponentPageConfig = {
    name: "Divider",
    chineseName: "区切り線",
    description: "コンテンツを区切る区切り線。どうぶつの森スタイルの5種類のスタイルを提供します。",
    demos: [
        {
            title: "基本的な使い方",
            description: "デフォルトの区切り線。",
            content: (
                <>
                    <p>デフォルトの区切り線</p>
                    <Divider />
                                <p>区切り線の下の内容</p>
                </>
            ),
        },
        {
            title: "全スタイル",
            description: "5種類の区切り線スタイル：4種類のライン + 1種類のウェーブ。",
            content: (
                <>
                    {dividerTypes.map((type) => (
                        <div key={type}>
                            <p>{type}</p>
                            <Divider type={type} />
                        </div>
                    ))}
                </>
            ),
        },
    ],
    props: [
        { name: "type", type: "'line-brown' | 'line-teal' | 'line-white' | 'line-yellow' | 'wave-yellow'", default: "-", description: "区切り線の種類" },
        { name: "style", type: "CSSProperties", default: "-", description: "カスタムスタイル" },
        { name: "className", type: "string", default: "-", description: "カスタムクラス名" },
    ],
};

function DividerPage() {
    return <ComponentShowcase {...config} />;
}

export default DividerPage;
