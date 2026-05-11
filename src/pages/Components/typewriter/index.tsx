import { Typewriter, Button } from "animal-island-ui";
import { useState } from "react";
import ComponentShowcase from "../../../components/ComponentShowcase/ComponentShowcase";
import type { ComponentPageConfig } from "../../../types";

function TypewriterPage() {
    const [replayKey, setReplayKey] = useState(0);

    const config: ComponentPageConfig = {
        name: "Typewriter",
        chineseName: "タイプライター",
        description: "文字を1文字ずつ表示するタイプライター風アニメーションコンポーネント。",
        demos: [
            {
                title: "基本的な使い方",
                description: "デフォルトで1文字あたり90msの速度で表示します。",
                content: (
                    <Typewriter>
                        Animal Island UI コンポーネントライブラリへようこそ！
                    </Typewriter>
                ),
            },
            {
                title: "速度のカスタマイズ",
                description: "speed 属性で1文字あたりの間隔（ミリ秒）を調整できます。",
                content: (
                    <Typewriter speed={200}>
                        これは少しゆっくりしたタイピング効果です〜
                    </Typewriter>
                ),
            },
            {
                title: "再生",
                description: "trigger の値を変更するとアニメーションを再生できます。",
                content: (
                    <>
                        <Button type="primary" onClick={() => setReplayKey((k) => k + 1)}>
                            再生
                        </Button>
                        <Typewriter trigger={replayKey} speed={80}>
                            上のボタンをクリックするとこの文字を再生します。
                        </Typewriter>
                    </>
                ),
            },
            {
                title: "全て直接表示",
                description: "autoPlay が false のときはアニメーションをスキップして直接表示します。",
                content: (
                    <Typewriter autoPlay={false}>
                        この文字はアニメーションを再生せず、そのまま全て表示されます。
                    </Typewriter>
                ),
            },
        ],
        props: [
            { name: "children", type: "ReactNode", default: "-", description: "1文字ずつ表示する内容" },
            { name: "speed", type: "number", default: "90", description: "1文字あたりの間隔（ms）" },
            { name: "trigger", type: "unknown", default: "-", description: "値の変化でアニメーションを再生" },
            { name: "autoPlay", type: "boolean", default: "true", description: "最初から自動再生するかどうか" },
            { name: "onDone", type: "() => void", default: "-", description: "再生完了時のコールバック" },
        ],
    };

    return <ComponentShowcase {...config} />;
}

export default TypewriterPage;
