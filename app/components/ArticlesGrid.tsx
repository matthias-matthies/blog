"use client"

import {Article} from "@/app/types/Article";
import ArticleCard from "@/app/components/ArticleCard";
import {useEffect, useState} from "react";

const ArticlesGrid = ({ articles, className = "" }: {articles: Article[]; className?: string;}) => {
    const [paginate, setPaginate] = useState(1)
    const [lowerBound, setLowerBound] = useState(0)
    const [upperBound, setUpperBound] = useState(9)
    const paginateMax = Math.ceil(articles.length / 18)
    // const paginateMax = 19

    useEffect(() => {
        setLowerBound((paginate-1) * 18)
        setUpperBound(paginate * 18)
    }, [paginate, articles]);
    const renderedArticles = articles.slice(lowerBound, upperBound)

    const pages: number[] = []

    for (let i = paginate-4 >= 1 ? paginate-4 : 1; i <= (paginate+4 <= paginateMax ? paginate+4 : paginateMax); i++) {
        pages.push(i)
    }

    return (
        <>
            <h2 className={`text-2xl mb-6 mt-12`}>Die neusten Artikel</h2>
            <ul className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`}>
                {renderedArticles.map((article) => (<li className={`my-8 md:m-2`}><ArticleCard className={`md:h-full`} key={article.slug} article={article}/></li>))}
            </ul>
            <div className="w-full mt-8 flex items-center justify-between border-t border-gray-200">
                <div className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer">
                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.1665 4H12.8332" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M1.1665 4L4.49984 7.33333" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M1.1665 4.00002L4.49984 0.666687" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <p className="text-sm ml-3 font-medium leading-none" onClick={() => paginate > 1 && setPaginate(paginate-1)}>Previous</p>
                </div>
                <div className="sm:flex hidden">
                    {pages.map((page) => {
                        return page == paginate ?
                            <p className={`text-sm font-medium leading-none cursor-pointer border-t pt-3 mr-4 px-2 text-indigo-700 border-indigo-400`} onClick={() => setPaginate(page)}>{page}</p> :
                            <p className={`text-sm font-medium leading-none cursor-pointer border-t pt-3 mr-4 px-2 text-gray-600 border-transparent hover:text-indigo-700 hover:border-indigo-400`} onClick={() => setPaginate(page)}>{page}</p>
                    })}
                </div>
                <div className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer">
                    <p className="text-sm font-medium leading-none mr-3" onClick={() => paginate < paginateMax && setPaginate(paginate+1)}>Next</p>
                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.1665 4H12.8332" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9.5 7.33333L12.8333 4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9.5 0.666687L12.8333 4.00002" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>
        </>
    )
}

export default ArticlesGrid
