import { ReactNode } from "react";
import "./DemoBox.less";

interface DemoBoxProps {
    title: string;
    description?: string;
    children: ReactNode;
}

function DemoBox({ title, description, children }: DemoBoxProps) {
    return (
        <div className="demo-box">
            <div className="demo-box-header">
                <h3>{title}</h3>
                {description && <p>{description}</p>}
            </div>
            <div className="demo-box-content">
                {children}
            </div>
        </div>
    );
}

export default DemoBox;
