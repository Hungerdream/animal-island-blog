import { lazy, Suspense } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Cursor } from "animal-island-ui";
import BackToTop from "./components/BackToTop";
// 音乐播放器组件，找到音乐链接后取消注释启用
// import MusicPlayer from "./components/MusicPlayer";

// 路由懒加载
const Home = lazy(() => import("./pages/Home/Home"));
const Post = lazy(() => import("./pages/Post/Post"));
const About = lazy(() => import("./pages/About/About"));
const Friends = lazy(() => import("./pages/Friends/Friends"));
const TownMap = lazy(() => import("./pages/TownMap/TownMap"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

function App() {
    return (
        <HashRouter>
            <Cursor>
                <Suspense fallback={null}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/posts/:id" element={<Post />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/friends" element={<Friends />} />
                        <Route path="/map" element={<TownMap />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Suspense>
            </Cursor>
            <BackToTop />
            {/* 音乐播放器侧边栏，找到音乐链接后取消注释启用 */}
            {/* <MusicPlayer /> */}
        </HashRouter>
    );
}

export default App;
