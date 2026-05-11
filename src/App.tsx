import { HashRouter, Routes, Route } from "react-router-dom";
import { Cursor } from "animal-island-ui";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Post from "./pages/Post/Post";
import { componentRoutes } from "./routes";
import ButtonPage from "./pages/Components/button";
import InputPage from "./pages/Components/input";
import SwitchPage from "./pages/Components/switch";
import ModalPage from "./pages/Components/modal";
import CardPage from "./pages/Components/card";
import CollapsePage from "./pages/Components/collapse";
import CursorPage from "./pages/Components/cursor";
import DividerPage from "./pages/Components/divider";
import FooterPage from "./pages/Components/footer";
import TimePage from "./pages/Components/time";
import PhonePage from "./pages/Components/phone";
import TypewriterPage from "./pages/Components/typewriter";

const pageMap: Record<string, React.FC> = {
    button: ButtonPage,
    input: InputPage,
    switch: SwitchPage,
    modal: ModalPage,
    card: CardPage,
    collapse: CollapsePage,
    cursor: CursorPage,
    divider: DividerPage,
    footer: FooterPage,
    time: TimePage,
    phone: PhonePage,
    typewriter: TypewriterPage,
};

function App() {
    return (
        <HashRouter>
            <Cursor>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/posts/:id" element={<Post />} />
                    <Route path="/components" element={<Layout />}>
                        {componentRoutes.map(({ key }) => {
                            const Page = pageMap[key];
                            return <Route key={key} path={key} element={<Page />} />;
                        })}
                    </Route>
                </Routes>
            </Cursor>
        </HashRouter>
    );
}

export default App;
