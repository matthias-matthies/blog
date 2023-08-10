import {getArticleBySlug} from "@/app/lib/articleParser";

const ArticlePage = ({ params }): JSX.Element => {
    const article = getArticleBySlug(params.slug)

    return (
        <>
            {article.content}
        </>
    )
}

export default ArticlePage