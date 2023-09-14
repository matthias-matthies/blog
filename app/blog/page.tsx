import {readDirectoryRecursively} from "@/app/lib/articleParser";
import ArticlesGrid from "@/app/components/ArticlesGrid";

const BlogPage = () => {
    const allArticles = readDirectoryRecursively(`${process.env.BASE_DIRECTORY}`)
    const recentArticles = allArticles
        .sort((a,b) => b.metadata.date.valueOf() - a.metadata.date.valueOf())
        .filter((article) => article.metadata.date < new Date())
        .slice(0, 9)

    return (
        <ArticlesGrid articles={recentArticles} />
    )
}

export default BlogPage
