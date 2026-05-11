import { Modal, Button } from "animal-island-ui";
import { useState } from "react";
import ComponentShowcase from "../../../components/ComponentShowcase/ComponentShowcase";
import type { ComponentPageConfig } from "../../../types";

function ModalPage() {
    const [visible, setVisible] = useState(false);

    const config: ComponentPageConfig = {
        name: "Modal",
        chineseName: "ダイアログ",
        description: "モーダルダイアログ。",
        demos: [
            {
                title: "基本的な使い方",
                description: "基本的な使用方法。",
                content: (
                    <>
                        <Button type="primary" onClick={() => setVisible(true)}>
                            ダイアログを開く
                        </Button>
                        <Modal
                            open={visible}
                            title="基本ダイアログ"
                            onClose={() => setVisible(false)}
                            onOk={() => setVisible(false)}
                        >
                            <p>これは基本的なダイアログの内容です。</p>
                        </Modal>
                    </>
                ),
            },
            {
                title: "カスタムフッター",
                description: "下部ボタンをカスタマイズできます。",
                content: (
                    <>
                        <Button type="primary" onClick={() => setVisible(true)}>
                            カスタムフッター
                        </Button>
                        <Modal
                            open={visible}
                            title="カスタムフッター"
                            onClose={() => setVisible(false)}
                            footer={
                                <div>
                                    <Button onClick={() => setVisible(false)}>キャンセル</Button>
                                    <Button type="primary" onClick={() => setVisible(false)}>
                                        確認
                                    </Button>
                                </div>
                            }
                        >
                            <p>これはカスタムフッターのダイアログです。</p>
                        </Modal>
                    </>
                ),
            },
        ],
        props: [
            { name: "open", type: "boolean", default: "false", description: "ダイアログを表示するかどうか" },
            { name: "title", type: "ReactNode", default: "-", description: "ダイアログのタイトル" },
            { name: "onClose", type: "function", default: "-", description: "マスク層または右上の×、キャンセルボタンをクリックしたときのコールバック" },
            { name: "onOk", type: "function", default: "-", description: "OKをクリックしたときのコールバック" },
            { name: "footer", type: "ReactNode", default: "-", description: "フッター内容" },
        ],
    };

    return <ComponentShowcase {...config} />;
}

export default ModalPage;
