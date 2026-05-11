import { Button } from "animal-island-ui";
import ComponentShowcase from "../../../components/ComponentShowcase/ComponentShowcase";
import type { ComponentPageConfig } from "../../../types";

const config: ComponentPageConfig = {
    name: "Button",
    chineseName: "ボタン",
    description: "操作ボタン。ビジネスロジックをトリガーする際に使用します。",
    demos: [
        {
            title: "ボタンの種類",
            description: "ボタンには5種類あります：プライマリ、デフォルト、ダッシュ、テキスト、リンク。",
            content: (
                <>
                    <Button type="primary">Primary Button</Button>
                    <Button>Default Button</Button>
                    <Button type="dashed">Dashed Button</Button>
                    <Button type="text">Text Button</Button>
                    <Button type="link">Link Button</Button>
                </>
            ),
        },
        {
            title: "ボタンのサイズ",
            description: "ボタンには大・中・小の3つのサイズがあります。",
            content: (
                <>
                    <Button type="primary" size="large">Large</Button>
                    <Button type="primary">Default</Button>
                    <Button type="primary" size="small">Small</Button>
                </>
            ),
        },
        {
            title: "ローディング状態",
            description: "loading 属性を追加することでボタンをローディング状態にできます。",
            content: <Button type="primary" loading>Loading</Button>,
        },
        {
            title: "無効状態",
            description: "disabled 属性を追加することでボタンを無効状態にできます。",
            content: <Button type="primary" disabled>Disabled</Button>,
        },
    ],
    props: [
        { name: "type", type: "primary | default | dashed | text | link", default: "default", description: "ボタンの種類を設定" },
        { name: "size", type: "large | middle | small", default: "middle", description: "ボタンのサイズを設定" },
        { name: "disabled", type: "boolean", default: "false", description: "ボタンを無効にするかどうか" },
        { name: "loading", type: "boolean", default: "false", description: "ボタンのローディング状態を設定" },
        { name: "danger", type: "boolean", default: "false", description: "危険ボタンを設定" },
    ],
};

function ButtonPage() {
    return <ComponentShowcase {...config} />;
}

export default ButtonPage;
