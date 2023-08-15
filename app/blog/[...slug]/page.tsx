import {readArticleBySlug, readDirectory} from '@/app/lib/articleParser'
import {ArticleInfo} from '@/app/lib/articleTypes'
import {MDXRemote} from 'next-mdx-remote/rsc'
import path from 'path'
import Link from "next/link";

const ArticleMdxPage = (content: string) => {
    return (
        <article className={"prose lg:prose-xl"}>
            <MDXRemote source={content} />
        </article>
    )
}
const ArticleCategoriesPage = (articles: ArticleInfo[], baseSlug: string) => {
    return (
        <article className={"prose lg:prose-xl"}>
            Article List:
            <ul>
                {articles.map(article => <li><a href={`${baseSlug}/${article.slug}`}>{article.slug}</a></li>)}
            </ul>
        </article>
    )
}
const ArticlePage = ({ params }: { params: { slug: string[]; }}) => {
    const slug = path.join(...params.slug)
    const baseDirectory = process.env.BASE_DIRECTORY
    const article = readArticleBySlug(`${baseDirectory}/${slug}`)
    const articles = readDirectory(`${baseDirectory}/${slug}`)

    return article.content === undefined ?
        ArticleCategoriesPage(articles, slug) :
        ArticleMdxPage(article.content)
}

export default ArticlePage
