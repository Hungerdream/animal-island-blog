import { Input } from "animal-island-ui";
import { useState } from "react";
import ComponentShowcase from "../../../components/ComponentShowcase/ComponentShowcase";
import type { ComponentPageConfig } from "../../../types";

function InputPage() {
    const [value, setValue] = useState("");

    const config: ComponentPageConfig = {
        name: "Input",
        chineseName: "入力ボックス",
        description: "マウスまたはキーボードで内容を入力します。",
        demos: [
            {
                title: "基本的な使い方",
                description: "基本的な使用方法。",
                content: <Input placeholder="内容を入力してください" />,
            },
            {
                title: "制御コンポーネント",
                description: "value と onChange を使って制御コンポーネントを実装します。",
                content: (
                    <>
                        <Input
                            placeholder="制御された入力ボックス"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                        />
                        <p>現在の値: {value}</p>
                    </>
                ),
            },
            {
                title: "無効状態",
                description: "disabled 属性を追加することで入力ボックスを無効にできます。",
                content: <Input placeholder="無効状態" disabled />,
            },
            {
                title: "異なるサイズ",
                description: "入力ボックスには大・デフォルト・小の3つのサイズがあります。",
                content: (
                    <>
                        <Input size="large" placeholder="Large" />
                        <Input placeholder="Default" />
                        <Input size="small" placeholder="Small" />
                    </>
                ),
            },
        ],
        props: [
            { name: "placeholder", type: "string", default: "-", description: "入力ボックスのプレースホルダー" },
            { name: "disabled", type: "boolean", default: "false", description: "無効にするかどうか" },
            { name: "size", type: "large | middle | small", default: "middle", description: "コントロールのサイズ" },
            { name: "value", type: "string", default: "-", description: "入力ボックスの内容" },
            { name: "onChange", type: "function", default: "-", description: "入力内容が変化したときのコールバック" },
        ],
    };

    return <ComponentShowcase {...config} />;
}

export default InputPage;
