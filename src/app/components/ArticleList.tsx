import Link from 'next/link'
import React from 'react'
import Image from "next/image"
import { Article } from '@/types';
import ArticleCard from './ArticleCard';

type ArticleListProps = {
    articles: Article[];
};

export const ArticleList = ({ articles }: ArticleListProps) => {
  return (
    <div>
        {articles.map((article) => (
            <ArticleCard article={article} key={article.id}/>
        ))}
    </div>
  );
};
