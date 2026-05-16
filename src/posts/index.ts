export type { BlogColor, PostSection, Post } from "./types";


import p1 from "./p1";
import p2 from "./p2";
import p3 from "./p3";
import p4 from "./p4";
import p5 from "./p5";
import p6 from "./p6";

export const posts = [p1, p2, p3, p4, p5, p6];

export const getPostById = (id: string) => posts.find((p) => p.id === id);
