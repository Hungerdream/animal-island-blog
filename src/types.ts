import type { ReactNode } from "react";

export interface PropItem {
    name: string;
    type: string;
    default: string;
    description: string;
}

export interface DemoConfig {
    title: string;
    description?: string;
    content: ReactNode;
}

export interface ComponentPageConfig {
    name: string;
    chineseName: string;
    description: string;
    demos: DemoConfig[];
    props: PropItem[];
}
