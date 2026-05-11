import type { ComponentPageConfig } from "../../types";
import DemoBox from "../DemoBox/DemoBox";
import PropsTable from "../PropsTable/PropsTable";
import "./ComponentShowcase.less";

function ComponentShowcase({ name, chineseName, description, demos, props }: ComponentPageConfig) {
    return (
        <div className="component-page">
            <h1>{name} {chineseName}</h1>
            <p>{description}</p>
            {demos.map((demo) => (
                <DemoBox key={demo.title} title={demo.title} description={demo.description}>
                    {demo.content}
                </DemoBox>
            ))}
            <PropsTable title="API" data={props} />
        </div>
    );
}

export default ComponentShowcase;
