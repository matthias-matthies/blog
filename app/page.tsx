import {readDirectoryRecursively} from "@/app/lib/articleParser";
import ArticleCard from "@/app/components/ArticleCard";
import {Article} from "@/app/types/Article";

export default function Home() {
    const allArticles = readDirectoryRecursively(`${process.env.BASE_DIRECTORY}`)

    const recentArticles = allArticles
        .sort((a,b) => b.metadata.date.valueOf() - a.metadata.date.valueOf())
        .filter((article) => article.metadata.date < new Date())
        .slice(0, 9)

    const featuredArticles: Article[] = []
    const displayedArticles = [...featuredArticles, ...recentArticles].slice(0, 9)

    return (
        <>
            <p>{process.env.HOMETEXT}</p>
            <ul>
                {displayedArticles.map((article) => (<li><ArticleCard key={article.slug} article={article}/></li>))}
            </ul>
        </>
    )
}
