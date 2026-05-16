import { HashRouter, Routes, Route } from "react-router-dom";
import { Cursor } from "animal-island-ui";
import Home from "./pages/Home/Home";
import Post from "./pages/Post/Post";
import About from "./pages/About/About";
import Friends from "./pages/Friends/Friends";

function App() {
    return (
        <HashRouter>
            <Cursor>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/posts/:id" element={<Post />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/friends" element={<Friends />} />
                </Routes>
            </Cursor>
        </HashRouter>
    );
}

export default App;
