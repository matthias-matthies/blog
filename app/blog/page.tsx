import {recursivelyGetArticles} from "@/app/lib/articleParser";

const BlogPage = () => {
    const articleDirectory = process.env.ARTICLE_DIRECTORY ? process.env.ARTICLE_DIRECTORY : "blog"
    const allArticles = recursivelyGetArticles(articleDirectory)
    const recentArticles = allArticles
        .sort((a,b) => b.metadata.date.valueOf() - a.metadata.date.valueOf())
        .filter(article => article.metadata.date < new Date())

    return (
        <>
            <div>
                <ul>
                    {recentArticles.map(post => <a href={post.slug}><li>{post.metadata.title} - {post.metadata.author} - {new Date(post.metadata.date).toISOString()}</li></a>)}
                </ul>
            </div>
        </>
    )
}

export default BlogPage
