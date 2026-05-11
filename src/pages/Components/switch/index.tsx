import { Switch } from "animal-island-ui";
import { useState } from "react";
import ComponentShowcase from "../../../components/ComponentShowcase/ComponentShowcase";
import type { ComponentPageConfig } from "../../../types";

function SwitchPage() {
    const [checked, setChecked] = useState(false);

    const config: ComponentPageConfig = {
        name: "Switch",
        chineseName: "スイッチ",
        description: "スイッチセレクター。",
        demos: [
            {
                title: "基本的な使い方",
                description: "基本的な使用方法。",
                content: <Switch />,
            },
            {
                title: "制御コンポーネント",
                description: "checked と onChange を使って制御コンポーネントを実装します。",
                content: (
                    <>
                        <Switch checked={checked} onChange={setChecked} />
                        <p>現在の状態: {checked ? "ON" : "OFF"}</p>
                    </>
                ),
            },
            {
                title: "無効状態",
                description: "disabled 属性を追加することでスイッチを無効にできます。",
                content: <Switch disabled />,
            },
            {
                title: "ローディング状態",
                description: "loading 属性を追加することでローディング状態を表示できます。",
                content: <Switch loading />,
            },
        ],
        props: [
            { name: "checked", type: "boolean", default: "false", description: "現在オンかどうかを指定" },
            { name: "disabled", type: "boolean", default: "false", description: "無効にするかどうか" },
            { name: "loading", type: "boolean", default: "false", description: "ローディング中のスイッチ" },
            { name: "onChange", type: "function", default: "-", description: "変化時のコールバック関数" },
        ],
    };

    return <ComponentShowcase {...config} />;
}

export default SwitchPage;
