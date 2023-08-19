import {Article} from "@/app/types/Article";
import Link from "next/link";

const ArticleCard = ({ article, className = "" }: {article: Article; className?: string;}) => {
    return (
        <Link href={article.slug}>
            <div className={`border my-2 ${className}`}>
                <h2>{article.metadata.title}</h2>
                <p>{article.metadata.excerpt}</p>
            </div>
        </Link>
    )
}

export default ArticleCard
