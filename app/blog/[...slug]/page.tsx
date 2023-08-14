import {getArticleBySlug, readDirectory} from '@/app/lib/articleParser'
import {ArticleInfo} from '@/app/lib/articleTypes'
import {MDXRemote} from 'next-mdx-remote/rsc'
import path from 'path'

const ArticleMdxPage = (content: string) => {
    return (
        <article className={"prose lg:prose-xl"}>
            <MDXRemote source={content} />
        </article>
    )
}
const ArticleCategoriesPage = (articles: ArticleInfo[]) => {
    return (
        <article className={"prose lg:prose-xl"}>
            Article List:
            <ul>
                {articles.map(article => <li>{article.slug}</li>)}
            </ul>
        </article>
    )
}
const ArticlePage = ({ params }: { params: { slug: string[]; }}) => {
    const slug = path.join(...params.slug)
    const article = getArticleBySlug(`${slug}`)
    // const articles = getArticlesByDirectory(`${slug}`)
    const isCategory = article.content === "Error 404: Not found"

    return isCategory ?
        ArticleCategoriesPage([]) :
        ArticleMdxPage(article.content)
}

export default ArticlePage