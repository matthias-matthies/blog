import {readDirectoryRecursively} from "@/app/lib/articleParser";
import Link from "next/link";

const BlogPage = () => {
    const allArticles = readDirectoryRecursively(`${process.env.BASE_DIRECTORY}`)
    const recentArticles = allArticles
        .sort((a,b) => b.metadata.date.valueOf() - a.metadata.date.valueOf())
        .filter((article) => article.metadata.date < new Date())

    return (
        <>
            <ul>
                {recentArticles.map(post => <li><Link href={post.slug}>{post.metadata.title} - {post.metadata.author} - {post.metadata.date.toISOString()}</Link></li>)}
            </ul>
        </>
    )
}

export default BlogPage
