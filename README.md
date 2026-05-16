# 🏝️ 饿梦小镇

一个互联网上的虚拟小镇，记录代码、生活和思考。

预览地址：[https://hungerdream.github.io/animal-island-blog/](https://hungerdream.github.io/animal-island-blog/)

## ✨ 特性

- 🎨 动森风格 UI，13 种卡片颜色
- 🌙 夜间模式切换
- 📝 文章分类系统（生活、代码、设计、音乐、思考）
- 🗺️ 小镇地图页面，标注小动物居民
- 💬 Giscus 评论系统
- ⬆️ 回到顶部按钮
- 📱 响应式设计，支持移动端

## 🏘️ 小镇居民

| 动物 | 地点 | 职责 |
|------|------|------|
| 🦊 饿梦 | 镇长小屋 | 镇长，记录想法 |
| 🦉 猫头鹰 | 小镇图书馆 | 管理文章 |
| 🐧 企鹅 | 唱片店 | 推荐音乐 |
| 🐻 小熊 | 友谊广场 | 招待客人 |
| 🐿️ 松鼠 | 布告栏 | 解答疑问 |
| 🕊️ 海鸥 | 月光海滩 | 听海发呆 |

## 📦 技术栈

- **前端框架**: React 19 + TypeScript
- **构建工具**: Vite
- **路由**: React Router v7
- **UI 组件库**: [animal-island-ui](https://github.com/guokaigdg/animal-island-ui)
- **样式**: Less
- **评论**: Giscus
- **部署**: GitHub Pages

## 🚀 快速开始

```bash
# 克隆仓库
git clone https://github.com/Hungerdream/animal-island-blog.git
cd animal-island-blog

# 安装依赖
npm install

# 开发模式
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview
```

## 📁 项目结构

```
src/
├── components/         # 组件
│   ├── BackToTop.tsx   # 回到顶部
│   ├── Giscus.tsx      # 评论系统
│   └── MusicPlayer.tsx # 音乐播放器（待启用）
├── pages/              # 页面
│   ├── Home/           # 首页
│   ├── Post/           # 文章详情
│   ├── About/          # 关于我
│   ├── Friends/        # 友链
│   └── TownMap/        # 小镇地图
├── posts/              # 文章数据
│   ├── types.ts        # 类型定义
│   ├── index.ts        # 汇总导出
│   └── p0-p6.ts        # 文章文件
└── App.tsx             # 应用入口
```

## ✍️ 写文章

在 `src/posts/` 目录下创建新的文章文件：

```typescript
import type { Post } from "./types";

const p7: Post = {
    id: "p7",
    title: "文章标题",
    excerpt: "文章摘要",
    body: "开头段落",
    date: "2026-05-16",
    tag: "Life",              // Life | Code | Design | Music | Thought
    color: "app-blue",        // 13种颜色可选
    readTime: "5分钟",
    cover: "📝",              // 封面emoji
    sections: [
        {
            heading: "小标题",
            paragraphs: ["段落内容"],
        },
    ],
    takeaways: ["要点1", "要点2"],
};

export default p7;
```

然后在 `src/posts/index.ts` 中导入并添加到数组。

## 🎨 可用卡片颜色

`app-pink` `purple` `app-blue` `app-yellow` `app-orange` `app-teal` `app-green` `app-red` `lime-green` `yellow-green` `brown` `warm-peach-pink`

## 📄 许可证

MIT

---

> 🏝️ 饿梦小镇 - 没有繁华的都市，没有喧嚣的人群，只有一座安静的小岛。
