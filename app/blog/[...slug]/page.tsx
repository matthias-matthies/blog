import {readArticleBySlug, readDirectory, readDirectoryRecursively} from '@/app/lib/articleParser'
import {Article, ArticleInfo} from '@/app/types/Article'
import {MDXRemote} from 'next-mdx-remote/rsc'
import path from 'path'
import ArticlesGrid from "@/app/components/ArticlesGrid";
import type { Metadata } from 'next'
import StructuredData from "@/app/components/StructuredData";

type Props = {
    params: { slug: string[]; }
}

export async function generateMetadata(
    { params }: Props
): Promise<Metadata> {
    const slug = path.join(...params.slug)
    const article = readArticleBySlug(`${process.env.BASE_DIRECTORY}/${slug}`)

    // @ts-ignore
    return article.content !== undefined ?
        {
            title: `${article.metadata.title}`,
            authors: [{name: article.metadata.author}],
            description: article.metadata.excerpt,
            twitter: {
                card: 'summary_large_image',
                title: article.metadata.title,
                description: article.metadata.excerpt,
                siteId: process.env.TWITTER_SITE_ID,
                creator: process.env.TWITTER_CREATOR,
                creatorId: process.env.TWITTER_CREATOR_ID,
                images: [`${process.env.FULL_URL}/images/${article.slug}`],
            },
            openGraph: {
                title: `${article.metadata.title}`,
                description: article.metadata.excerpt,
                url: `/${article.slug}`,
                siteName: `${process.env.PRIVACY_POLICY_DOMAIN}`,
                images: [
                    {
                        url: `/images/${article.slug}.webp`,
                        width: 1000,
                        height: 1000,
                    }
                ],
                locale: `${process.env.BLOG_LANGUAGE}`,
                type: `article`,
                publishedTime: article.metadata.date
            },
        } :
        {
            title: `${process.env.BLOG_NAME} ${params.slug[params.slug.length-1]}`,
            description: `Übersicht für die Blogartikel zum Thema: ${params.slug[params.slug.length-1]}`
        }
}

const ArticleMdxPage = (article: Article) => {
    const structuredData = {
        headline: `${article.metadata.title}`,
        description: `${article.metadata.excerpt}`,
        slug: `${article.slug}`,
        author: `${article.metadata.author}`,
        datePublished: `${article.metadata.date}`
    }

    return (
        <>
            <StructuredData data={structuredData} />
            <article className={"prose lg:prose-xl"}>
                <MDXRemote source={`${article.content}`} />
            </article>
        </>
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
            {allArticles.length > 0 ? <ArticlesGrid articles={allArticles}/> : ""}
        </>
    )
}

const ArticlePage = ({ params }: Props) => {
    const slug = path.join(...params.slug)
    const article = readArticleBySlug(`${process.env.BASE_DIRECTORY}/${slug}`)
    const articles = readDirectory(`${process.env.BASE_DIRECTORY}/${slug}`)

    return article.content === undefined ?
        ArticleCategoriesPage(articles, `${process.env.BASE_DIRECTORY}/${slug}`) :
        ArticleMdxPage(article)
}

export default ArticlePage
