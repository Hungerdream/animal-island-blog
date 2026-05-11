import { Collapse } from "animal-island-ui";
import ComponentShowcase from "../../../components/ComponentShowcase/ComponentShowcase";
import type { ComponentPageConfig } from "../../../types";
import "./collapse.less";

const config: ComponentPageConfig = {
    name: "Collapse",
    chineseName: "折りたたみパネル",
    description: "折りたたみ／展開可能なコンテンツ領域。Q&A形式で表示します。",
    demos: [
        {
            title: "基本的な使い方",
            description: "最もシンプルな折りたたみパネル。",
            content: (
                <div className="collapse-wrapper">
                    <Collapse
                        question="どうぶつの森とは？"
                        answer="『あつまれ どうぶつの森』は任天堂が開発した生活シミュレーションゲームで、プレイヤーは無人島で新しい生活を始め、花を植えたり、魚を釣ったり、家を飾ったりできます。"
                    />
                </div>
            ),
        },
        {
            title: "デフォルト展開",
            description: "defaultExpanded を true に設定すると、パネルがデフォルトで展開されます。",
            content: (
                <div className="collapse-wrapper">
                    <Collapse
                        question="Animal Island UI のインストール方法は？"
                        answer="npm install animal-island-ui を実行すればプロジェクトにインストールできます。"
                        defaultExpanded
                    />
                </div>
            ),
        },
        {
            title: "複数パネル",
            description: "複数の折りたたみパネルを組み合わせて使用します。",
            content: (
                <div className="collapse-group">
                    <Collapse
                        question="どのコンポーネントに対応していますか？"
                        answer="現在、Button、Input、Switch、Modal、Card、Collapse、Cursor、Divider の全8コンポーネントに対応しています。"
                    />
                    <Collapse
                        question="TypeScript に対応していますか？"
                        answer="完全対応しています！全てのコンポーネントは TypeScript で書かれており、完全な型定義を提供しています。"
                    />
                    <Collapse
                        question="問題はどうやって報告すればいいですか？"
                        answer="GitHub リポジトリで Issue を立てていただければ、できるだけ早く返信します。"
                    />
                </div>
            ),
        },
        {
            title: "無効状態",
            description: "disabled 属性で折りたたみパネルを無効にします。",
            content: (
                <div className="collapse-wrapper">
                    <Collapse
                        question="これは無効化されたパネルです"
                        answer="展開できません"
                        disabled
                    />
                </div>
            ),
        },
    ],
    props: [
        { name: "question", type: "ReactNode", default: "-", description: "質問／タイトル（必須）" },
        { name: "answer", type: "ReactNode", default: "-", description: "回答／内容（必須）" },
        { name: "defaultExpanded", type: "boolean", default: "false", description: "デフォルトで展開するかどうか" },
        { name: "disabled", type: "boolean", default: "false", description: "無効にするかどうか" },
        { name: "className", type: "string", default: "-", description: "カスタムクラス名" },
        { name: "style", type: "CSSProperties", default: "-", description: "カスタムスタイル" },
    ],
};

function CollapsePage() {
    return <ComponentShowcase {...config} />;
}

export default CollapsePage;
