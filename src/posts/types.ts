export type BlogColor =
    | "app-pink"
    | "purple"
    | "app-blue"
    | "app-yellow"
    | "app-orange"
    | "app-teal"
    | "app-green"
    | "app-red"
    | "lime-green"
    | "yellow-green"
    | "brown"
    | "warm-peach-pink";

export interface PostSection {
    heading: string;
    paragraphs: string[];
}

export interface Post {
    id: string;
    title: string;
    excerpt: string;
    body: string;
    date: string;
    tag: string;
    color: BlogColor;
    readTime: string;
    cover: string;
    sections: PostSection[];
    takeaways: string[];
}
