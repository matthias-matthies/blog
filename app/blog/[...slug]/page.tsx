import {getArticles} from "@/app/lib/articleParser";

export async function generateStaticParams() {
    const articles = getArticles()

    return articles.map(article => ({
        slug: article.slug
    }))
}

const ArticlePage = ({ params }: { params: { slug: string; }}): JSX.Element => {
    return (
        <>
            {params.slug}
        </>
    )
}

export default ArticlePage
