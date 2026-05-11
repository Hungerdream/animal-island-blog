import { Outlet, Link, useLocation } from "react-router-dom";
import { Footer } from "animal-island-ui";
import { componentRoutes } from "../../routes";
import "./Layout.less";

function Layout() {
    const location = useLocation();
    const currentPath = location.pathname.replace("/components/", "");

    return (
        <div className="layout">
            <aside className="sidebar">
                <h2>コンポーネント一覧</h2>
                <nav>
                    <ul>
                        {componentRoutes.map((comp) => (
                            <li key={comp.key}>
                                <Link
                                    to={comp.key}
                                    className={currentPath === comp.key ? "active" : ""}
                                >
                                    {comp.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>
            <main className="content">
                <div className="content-body">
                    <Outlet />
                </div>
                <Footer type="sea" />
            </main>
        </div>
    );
}

export default Layout;
