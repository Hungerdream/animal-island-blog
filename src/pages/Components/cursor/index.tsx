import { Cursor, Button } from "animal-island-ui";
import ComponentShowcase from "../../../components/ComponentShowcase/ComponentShowcase";
import type { ComponentPageConfig } from "../../../types";
import "./cursor.less";

const config: ComponentPageConfig = {
    name: "Cursor",
    chineseName: "カスタムカーソル",
    description: "マウスカーソルをカスタマイズするコンポーネント。",
    demos: [
        {
            title: "基本的な使い方",
            description: "カスタムカーソルの効果。",
            content: (
                <div className="cursor-demo-area">
                    <p>この領域にマウスを移動してカスタムカーソルの効果を確認してください</p>
                    <Cursor>
                        <Button>カスタムカーソルを使用</Button>
                    </Cursor>
                </div>
            ),
        },
    ],
    props: [
        { name: "style", type: "CSSProperties", default: "-", description: "カスタムスタイル" },
        { name: "className", type: "string", default: "-", description: "カスタムクラス名" },
        { name: "children", type: "ReactNode", default: "-", description: "子要素" },
    ],
};

function CursorPage() {
    return <ComponentShowcase {...config} />;
}

export default CursorPage;
