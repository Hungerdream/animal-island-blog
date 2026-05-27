import { lazy, Suspense } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Cursor } from "animal-island-ui";
import BackToTop from "./components/BackToTop";
import MusicPlayer from "./components/MusicPlayer";

// 路由懒加载
const Home = lazy(() => import("./pages/Home/Home"));
const Post = lazy(() => import("./pages/Post/Post"));
const About = lazy(() => import("./pages/About/About"));
const Friends = lazy(() => import("./pages/Friends/Friends"));
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
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Suspense>
            </Cursor>
            <BackToTop />
            <MusicPlayer />
        </HashRouter>
    );
}

export default App;
