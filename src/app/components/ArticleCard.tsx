import { Article } from '@/types';
import Link from 'next/link';
import React from 'react'
import Image from "next/image";

type ArticleCardProps = {
    article: Article;
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <div>
                <article className="shadow my-4 flex flex-col" key={article.id}>
            <Link href={`articles/${article.id}`} className="hover:opacity-75">
                <Image
                    // seed と大きめのサイズを指定
                    src={`https://picsum.photos/seed/${article.id}/1280/720`}
                    alt={article.title}
                    // 実際に描画する大きさ
                    width={1280}
                    height={720}
                    quality={60}
                    // レイアウトをレスポンシブに
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
                    className="object-cover"
                />
            </Link>
            <div className="bg-white flex flex-col justify-start p-6">
                <Link href="#" className="text-blue-700 pb-4 font-bold">Technology</Link>
                <Link href={`articles/${article.id}`} className="text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4">
                    {article.title}
                </Link>
                <p className="text-sm pb-3 text-slate-900">
                    published on {new Date(article.createdAt).toLocaleDateString()}
                </p>
                <Link href={`articles/${article.id}`} className="text-slate-900 pb-6">
                    {article.content.length > 70 ? article.content.substring(0, 70) + "...": article.content}
                </Link>
                <Link href={`articles/${article.id}`} className="text-pink-800 hover:text-black">
                    続きを読む
                </Link>
            </div>
        </article>
    </div>
  )
}

export default ArticleCard