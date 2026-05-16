export type BlogColor =
    | "app-pink"
    | "purple"
    | "app-blue"
    | "app-yellow"
    | "app-orange"
    | "app-teal"
    | "app-green"
    | "app-red"
    | "lime-green"
    | "yellow-green"
    | "brown"
    | "warm-peach-pink";

export interface PostSection {
    heading: string;
    paragraphs: string[];
}

export interface Post {
    id: string;
    title: string;
    excerpt: string;
    body: string;
    date: string;
    tag: string;
    color: BlogColor;
    readTime: string;
    cover: string;
    sections: PostSection[];
    takeaways: string[];
}

export const posts: Post[] = [
    {
        id: "p1",
        title: "在无人岛上学会宁静",
        excerpt: "从钓鱼竿到夕阳，在岛上重新认识了「慢生活」。",
        body: "搬到岛上后做的第一件事，不是建房子也不是钓鱼，而是坐在沙滩上度过一个发呆的下午。城市的30分钟像3秒，而这里的1小时能让你听到真正的海浪节奏。",
        date: "2026-04-18",
        tag: "Life",
        color: "app-blue",
        readTime: "6分钟",
        cover: "🏝️",
        sections: [
            {
                heading: "找回「什么都不做」的能力",
                paragraphs: [
                    "在城市时，我总是被「下一个日程」追赶。日历以30分钟为单位填满，有空档就会焦虑，连通勤时间都要倍速播放Podcast来「消费」。来到岛上的第一周，我花了很多力气才改掉这个习惯。",
                    "午后只有海浪声，手边空无一物，手机没有信号。一开始坐立不安，反复握沙又松手，毫无意义地站起来又坐下。第三天傍晚，我终于不再责怪「什么都不做的自己」。",
                ],
            },
            {
                heading: "海浪教会我的时间单位",
                paragraphs: [
                    "海浪每7秒拍岸一次。一旦注意到这个节奏，不用看表也能感受到时间在流动。在城市里用「分钟」「秒」来衡量时间，在岛上则变成了「10次浪」「太阳落山前」「咖啡变凉前」。",
                    "这种粗糙的时间单位也影响了我的思维方式。精细的待办清单消失了，取而代之的是一张纸，上面只写着「今天想这一件事」。",
                ],
            },
            {
                heading: "宁静不是否定成就",
                paragraphs: [
                    "常被误解的是，慢生活并非「什么都不做」。恰恰相反，它是为了筛选出真正重要的东西。来到岛上后我写的代码比以前少了，但发布的东西质量更高了——因为我学会了删减。",
                ],
            },
        ],
        takeaways: [
            "前三天是与「不做事的罪恶感」搏斗的时间",
            "把时间单位从「分钟」换成「自然现象」",
            "慢生活不是减少产出，而是让它更精纯",
        ],
    },
    {
        id: "p2",
        title: "用 React 19 做一个打字机效果",
        excerpt: "Suspense、transition、并行渲染——新API对动画意味着什么。",
        body: "React 19 让我重新思考了动画的实现方式。useTransition 不再只是解决UI阻塞的工具，它让打字机、骨架屏、流式组件变得简洁而优雅。",
        date: "2026-04-12",
        tag: "Code",
        color: "app-green",
        readTime: "9分钟",
        cover: "⌨️",
        sections: [
            {
                heading: "为什么 setInterval 不够用",
                paragraphs: [
                    "经典的打字机实现是用 setInterval 逐字更新 state。这能用，但当标签页非活跃时计时器会停止，切回来时文字会一股脑涌出。而且用户在页面内做其他重操作时，打字会卡住。",
                    "我想解决两个问题：后台运行时也能按时间推进，以及UI忙碌时打字优先。",
                ],
            },
            {
                heading: "requestAnimationFrame + useTransition",
                paragraphs: [
                    "RAF 与浏览器绘制时机同步，标签页非活跃时自然停止。但仅用 RAF 会导致 state 更新过于频繁，阻塞其他更新。所以用 useTransition 包装 state 更新，将其设为低优先级。",
                    "这样就会出现「用户滚动时打字稍微延迟」的自然行为，整体体感速度反而更快。",
                ],
            },
            {
                heading: "用 trigger 实现重播设计",
                paragraphs: [
                    "想在每次点击重播按钮时，保持 children 不变但重新播放动画，最简洁的方案是在 useEffect 的依赖数组中加入一个任意的 trigger。Animal Island UI 的 Typewriter 组件正是采用这个策略。",
                ],
            },
        ],
        takeaways: [
            "用 RAF 而非 setInterval 作为基础",
            "用 useTransition 将打字更新设为低优先级",
            "用 trigger prop 保持重播逻辑简洁",
        ],
    },
    {
        id: "p3",
        title: "13色卡片引发的设计思考",
        excerpt: "当颜色成为语言，组件库如何讲述故事？",
        body: "为什么 Animal Island UI 提供13种卡片颜色？因为它不是设计系统，而是一个小小的世界。每种颜色对应一种情感：app-pink 是清晨，brown 是泥土，warm-peach-pink 是黄昏。",
        date: "2026-04-05",
        tag: "Design",
        color: "warm-peach-pink",
        readTime: "7分钟",
        cover: "🎨",
        sections: [
            {
                heading: "颜色不是token，而是词汇",
                paragraphs: [
                    "许多设计系统用「primary / secondary / danger」这样的角色来命名颜色。这很方便，但剥夺了颜色本身的情绪。Animal Island UI 做了相反的选择：不用颜色的角色，而是用颜色唤起的场景来命名。",
                    "`app-pink` 是「岛上的清晨」，`brown` 是「花坛的泥土」，`warm-peach-pink` 是「灯塔的黄昏」。用户选的不是颜色，而是想讲述的时段。",
                ],
            },
            {
                heading: "为什么是13",
                paragraphs: [
                    "不用10或12而用13，是为了避开偶数的「整齐感」。13种颜色是个零头数，记不全。所以用户会选出「喜欢的3-4种」组成自己的调色板。这是赋予自由的同时，也交出选择责任的设计。",
                ],
            },
            {
                heading: "把颜色变成叙事的实例",
                paragraphs: [
                    "这个博客的文章卡片不是按标签而是按情绪配色的。Life 是海的蓝，Code 是新绿，Design 是晚霞。读者只需滚动就能感受到「今天的岛是什么颜色」。",
                ],
            },
        ],
        takeaways: [
            "颜色可以用场景而非角色来命名",
            "零头数能催生选择和个性化",
            "按情绪配色能让信息层次更柔和",
        ],
    },
    {
        id: "p4",
        title: "写给前端的园艺指南",
        excerpt: "代码需要修剪，花坛也一样。",
        body: "我在阳台种了3盆迷迭香，死了2盆。死掉的共同点是浇水太多。代码也是如此——过度抽象、过度封装、过度「优化」都是溺爱。",
        date: "2026-03-29",
        tag: "Life",
        color: "lime-green",
        readTime: "5分钟",
        cover: "🌱",
        sections: [
            {
                heading: "浇水过多的病",
                paragraphs: [
                    "死掉的迷迭香根部已经发黑腐烂。因为土壤一直湿润，根无法呼吸。好心的照料反而掐断了它的生机。",
                    "代码里也会发生同样的事。为所有情况设计的抽象、永远不会改写的接口、保护不可能出现的null的if语句——这些都是「让根腐烂的浇水」。",
                ],
            },
            {
                heading: "修剪的勇气",
                paragraphs: [
                    "园艺第一课就是「狠心剪掉」。叶子太多养分分散，就开不了花。代码也一样，没人用的抽象、读5秒以上看不懂的函数、没人能说清用途的配置文件，都是修剪对象。",
                    "剪掉很可怕。但不剪，新芽就长不出来。",
                ],
            },
            {
                heading: "自然生长的三个习惯",
                paragraphs: [
                    "1) 写代码前先考虑「不写」。2) 先让代码丑着跑起来。3) 重构等到同一个模式出现第三次。守住这三条，代码会自己「往该长的方向」生长。",
                ],
            },
        ],
        takeaways: [
            "过度防御会导致根腐",
            "没人用的抽象就修剪掉",
            "重构等到第三次出现相同模式再动手",
        ],
    },
    {
        id: "p5",
        title: "深夜电台 · 岛上的歌单",
        excerpt: "循环播放的20首BGM，推荐给所有写代码的人。",
        body: "深夜写代码少不了BGM。汇总了我在岛上循环最多的20首：从Lo-fi Hip Hop到久石让，还有独立游戏OST。",
        date: "2026-03-20",
        tag: "Music",
        color: "purple",
        readTime: "4分钟",
        cover: "🎧",
        sections: [
            {
                heading: "BGM掌管的是情绪的方向盘",
                paragraphs: [
                    "BGM不只是背景音，而是工作模式的开关。重构时听Lo-fi Hip Hop，设计时听久石让，修bug时静音，头脑风暴时听独立游戏OST。按场景切换，大脑能快速理解「现在是什么时间」。",
                ],
            },
            {
                heading: "选曲的三个标准",
                paragraphs: [
                    "1) 歌词不能太强（不打断思考）。2) 节奏要稳定（不让专注的波浪摇摆）。3) 不能勾起回忆（不要想起用那首歌玩过的过去）。满足这三点，任何类型都能成为「工作BGM」。",
                ],
            },
            {
                heading: "循环最多的一首",
                paragraphs: [
                    "今年循环最多的是一首独立游戏标题画面的曲子。场景是安静的岛，只有波浪和风混入电子音。写代码时没有比这更合适的背景了。",
                ],
            },
        ],
        takeaways: [
            "BGM是工作模式的切换开关",
            "无歌词·稳定节奏·无回忆最适合工作",
            "按场景分歌单能更快进入专注",
        ],
    },
    {
        id: "p6",
        title: "2025年回顾：我的5个错误",
        excerpt: "不是所有经历都值得书写，但每个错误都值得铭记。",
        body: "今年我犯了5个代价惨重的错误：1）接了不喜欢的项目；2）过早优化；3）追了热门技术；4）忽视健康；5）不会拒绝。",
        date: "2026-01-02",
        tag: "Thought",
        color: "brown",
        readTime: "8分钟",
        cover: "🪵",
        sections: [
            {
                heading: "接了不喜欢的项目",
                paragraphs: [
                    "仅因为报酬好，就接了不感兴趣领域的工作。三个月里每天起床都很沉重。结果交付质量低于平均水平，信誉和收入都受损了。「喜欢」不是奢侈品，而是持续性的燃料。",
                ],
            },
            {
                heading: "过早优化",
                paragraphs: [
                    "用户才3个人的服务，就按10万人规模来设计。结果初期验证速度慢了一半，最后服务本身也关停了。问题出现之前的优化，几乎总是亏损。",
                ],
            },
            {
                heading: "追了热门技术",
                paragraphs: [
                    "试了3个新框架，一个都没投入生产。学到了东西，但能回馈到主业的微乎其微。追热点的话，应该先划定「追的时间」。",
                ],
            },
            {
                heading: "忽视健康",
                paragraphs: [
                    "年末病倒了两周。原因很简单：一直在削减睡眠。失去的两周远比省下的睡眠时间长。健康不是「成本」，而是「容量」。",
                ],
            },
            {
                heading: "不会拒绝",
                paragraphs: [
                    "不太熟的人的咨询、意义不大的会议、本可以拒绝的请求，总是不知不觉就接下来了。我花了一整年才意识到：拒绝是一种在不失去敬意的前提下守住时间的技能。",
                ],
            },
        ],
        takeaways: [
            "「喜欢」是持续性的燃料",
            "优化等出了问题再说",
            "健康不是成本而是容量",
            "拒绝可以与敬意并存",
        ],
    },
];

export const getPostById = (id: string) => posts.find((p) => p.id === id);
