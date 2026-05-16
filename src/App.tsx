import { HashRouter, Routes, Route } from "react-router-dom";
import { Cursor } from "animal-island-ui";
import Home from "./pages/Home/Home";
import Post from "./pages/Post/Post";
import About from "./pages/About/About";
import Friends from "./pages/Friends/Friends";
import TownMap from "./pages/TownMap/TownMap";
import BackToTop from "./components/BackToTop";
// 音乐播放器组件，找到音乐链接后取消注释启用
// import MusicPlayer from "./components/MusicPlayer";

function App() {
    return (
        <HashRouter>
            <Cursor>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/posts/:id" element={<Post />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/friends" element={<Friends />} />
                    <Route path="/map" element={<TownMap />} />
                </Routes>
            </Cursor>
            <BackToTop />
            {/* 音乐播放器侧边栏，找到音乐链接后取消注释启用 */}
            {/* <MusicPlayer /> */}
        </HashRouter>
    );
}

export default App;
