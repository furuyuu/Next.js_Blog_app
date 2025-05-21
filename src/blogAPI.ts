import { Article } from "./types";
import { notFound} from "next/navigation";

export const getAllArticles = async (): Promise<Article[]> => {
    const res = await fetch(`http://localhost:3001/posts`, { cache: "no-store" }); //SSR（更新が多いため）

    if (!res.ok) {
        throw new Error("エラーが発生しました。");
    }

    await new Promise((resolve) => setTimeout(resolve, 1500))

    const artciles = await res.json();
    return artciles;
};

export const getDetailArticle = async (id: string): Promise<Article> => {
    const res = await fetch(`http://localhost:3001/posts/${id}`, { 
        next: { revalidate: 60} 
    }); //SSR（更新が多いため）

    if (res.status === 404) {
        notFound();
    }

    if (!res.ok) {
        throw new Error("エラーが発生しました。");
    }

    await new Promise((resolve) => setTimeout(resolve, 1000))

    const artciles = await res.json();
    return artciles;
};

export const createArticle = async (
    id: string,
    title: string,
    content: string
): Promise<Article> => {
    const currentDatetime = new Date().toISOString()

    const res = await fetch(`http://localhost:3001/posts`, { 
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, title, content, createdAt: currentDatetime }),
    });

    if (!res.ok) {
        throw new Error("エラーが発生しました。");
    }

    await new Promise((resolve) => setTimeout(resolve, 1000))

    const newartciles = await res.json();
    return newartciles;
};

export const deleteArticle = async (id: string,): Promise<Article> => {
    const res = await fetch(`http://localhost:3001/posts/${id}`, { 
        method: "DELETE",
    });

    if (!res.ok) {
        throw new Error("エラーが発生しました。");
    }

    await new Promise((resolve) => setTimeout(resolve, 1000))

    const deleteartciles = await res.json();
    return deleteartciles;
};