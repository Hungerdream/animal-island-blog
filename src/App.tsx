import { HashRouter, Routes, Route } from "react-router-dom";
import { Cursor } from "animal-island-ui";
import Home from "./pages/Home/Home";
import Post from "./pages/Post/Post";

function App() {
    return (
        <HashRouter>
            <Cursor>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/posts/:id" element={<Post />} />
                </Routes>
            </Cursor>
        </HashRouter>
    );
}

export default App;
