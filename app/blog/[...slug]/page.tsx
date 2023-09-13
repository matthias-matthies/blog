import {readArticleBySlug, readDirectory, readDirectoryRecursively} from '@/app/lib/articleParser'
import {ArticleInfo} from '@/app/types/Article'
import {MDXRemote} from 'next-mdx-remote/rsc'
import path from 'path'
import ArticleCard from "@/app/components/ArticleCard";

const ArticleMdxPage = (content: string) => {
    return (
        <article className={"prose lg:prose-xl"}>
            <MDXRemote source={content} />
        </article>
    )
}
const ArticleCategoriesPage = (articles: ArticleInfo[], baseSlug: string) => {
    const allFiles = articles
        .map(article => readArticleBySlug(`${baseSlug}/${article.slug}`))

    const allArticles = allFiles
        .filter(article => article.metadata.author != undefined)

    const allDirectories = allFiles
        .filter(article => article.metadata.author == undefined)
        .map(directory => {
            return {
                slug: directory.slug,
                name: directory.slug.substring(directory.slug.lastIndexOf("/")+1)
            }
        })

    return (
        <>
            <h2 className={`text-2xl mb-6 mt-12`}>Die neusten Artikel von <span className={`uppercase `}>{baseSlug.substring(baseSlug.lastIndexOf("/")+1)}</span>
            </h2>
            {allArticles.length > 0
                ? (<ul>
                    {allArticles.map((article) => (<li className={`my-8`}><ArticleCard key={article.slug} article={article}/></li>))}
                </ul>)
                : (<p>Hier scheint etwas falsch gelaufen zu sein..</p>)
            }

        </>
    )
}

const ArticlePage = ({ params }: { params: { slug: string[]; }}) => {
    const slug = path.join(...params.slug)
    const baseDirectory = process.env.BASE_DIRECTORY
    const article = readArticleBySlug(`${baseDirectory}/${slug}`)
    const articles = readDirectory(`${baseDirectory}/${slug}`)

    return article.content === undefined ?
        ArticleCategoriesPage(articles, `${baseDirectory}/${slug}`) :
        ArticleMdxPage(article.content)
}

export default ArticlePage
