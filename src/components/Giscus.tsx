import { useEffect, useRef } from "react";

interface GiscusProps {
    repo?: string;
    repoId?: string;
    category?: string;
    categoryId?: string;
}

function Giscus({
    repo = "Hungerdream/animal-island-blog",
    repoId = "R_kgDOSe8YRA",
    category = "Announcements",
    categoryId = "DIC_kwDOSe8YRM4C9K06",
}: GiscusProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current || ref.current.querySelector("iframe")) return;

        const script = document.createElement("script");
        script.src = "https://giscus.app/client.js";
        script.setAttribute("data-repo", repo);
        script.setAttribute("data-repo-id", repoId);
        script.setAttribute("data-category", category);
        script.setAttribute("data-category-id", categoryId);
        script.setAttribute("data-mapping", "pathname");
        script.setAttribute("data-strict", "0");
        script.setAttribute("data-reactions-enabled", "1");
        script.setAttribute("data-emit-metadata", "0");
        script.setAttribute("data-input-position", "bottom");
        script.setAttribute("data-theme", "preferred_color_scheme");
        script.setAttribute("data-lang", "zh-CN");
        script.setAttribute("crossorigin", "anonymous");
        script.async = true;

        ref.current.appendChild(script);
    }, [repo, repoId, category, categoryId]);

    return <div ref={ref} className="giscus-container" style={{ marginTop: 24 }} />;
}

export default Giscus;
