import {Article} from "@/app/types/Article";
import Link from "next/link";
import Image from 'next/image'

const ArticleCard = ({ article, className = "" }: {article: Article; className?: string;}) => {

    return (
        <div className={`flex flex-col border p-2 my-2 ${className} text-center`}>
            <Link href={`/${article.slug}`}>
                <Image
                    src={`/images/${article.slug}.webp`}
                    width={1000}
                    height={1000}
                    alt={`Artikelbild mit Link zum Artikel`}
                />
            </Link>
            <span className={`uppercase text-sm font-light`}>
                {
                    article.slug
                        .replaceAll("/", " ")
                        .substring(4, article.slug.lastIndexOf("/"))
                }
            </span>
            <h3 className={`text-xl`}>
                {article.metadata.title}
            </h3>
            <span className={`uppercase text-sm font-light`}>
                {
                    article.metadata.date
                        .toJSON()
                        .slice(0,10)
                        .split('-')
                        .reverse()
                        .join('/')
                }
            </span>
            <p className={`text-md my-2 h-full`}>
                {article.metadata.excerpt}
            </p>
            <Link
                className={`text-md border px-4 py-2`}
                href={`/${article.slug}`}
            >
                Weiterlesen
            </Link>
        </div>
    )
}

export default ArticleCard
