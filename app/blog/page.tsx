import {readDirectoryRecursively} from "@/app/lib/articleParser";
import Link from "next/link";
import {Article} from "@/app/types/Article";
import ArticleCard from "@/app/components/ArticleCard";

const BlogPage = () => {
    const allArticles = readDirectoryRecursively(`${process.env.BASE_DIRECTORY}`)
    const recentArticles = allArticles
        .sort((a,b) => b.metadata.date.valueOf() - a.metadata.date.valueOf())
        .filter((article) => article.metadata.date < new Date())
        .slice(0, 9)

    

    return (
        <>
            <h2 className={`text-2xl mb-6 mt-12`}>Die neusten Artikel</h2>
            <ul>
                {recentArticles.map((article) => (<li className={`my-8`}><ArticleCard key={article.slug} article={article}/></li>))}
            </ul>
        </>
    )
}

export default BlogPage
