# KAI's Island

个人技术博客，展示文章与 UI 组件库。

## 技术栈

- **前端框架**: React 19 + TypeScript
- **构建工具**: Vite
- **路由**: React Router v7
- **UI 组件库**: animal-island-ui
- **样式**: Less

## 快速开始

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview
```

## 项目结构

```
src/
├── components/       # 通用组件
├── pages/
│   ├── Home/        # 博客首页
│   ├── Post/        # 文章详情页
│   └── Components/  # 组件演示页面
│       ├── button/
│       ├── input/
│       ├── switch/
│       ├── modal/
│       ├── card/
│       ├── collapse/
│       ├── cursor/
│       ├── divider/
│       ├── footer/
│       ├── phone/
│       ├── time/
│       └── typewriter/
└── App.tsx          # 应用入口
```

## 功能

- 博客文章展示
- 组件库演示
- 暗色模式切换
- 邮件订阅