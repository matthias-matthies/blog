import {readDirectoryRecursively} from "@/app/lib/articleParser";
import {Article} from "@/app/types/Article";
import ArticlesGrid from "@/app/components/ArticlesGrid";

export default function Home() {
    const allArticles = readDirectoryRecursively(`${process.env.BASE_DIRECTORY}`)
    const recentArticles = allArticles
        .sort((a,b) => b.metadata.date.valueOf() - a.metadata.date.valueOf())
        .filter((article) => article.metadata.date < new Date())
        .slice(0, 18)
    const featuredArticles: Article[] = []
    const displayedArticles = [...featuredArticles, ...recentArticles].slice(0, 18)

    return (
        <>
            <h1 className={`text-4xl mb-8 font-extrabold`}>Das Streben nach Gleichgewicht ist der Schlüssel zum inneren Frieden und persönlichem Wachstum</h1>
            <p>Willkommen im "Hallo Welt" Blog! Entdecken Sie Inspiration und Weisheit für Ihre persönliche Entwicklung. Wir bieten praktische Ratschläge zu Themen wie Zielsetzung, Zeitmanagement und mehr. Gemeinsam werden wir Ihr volles Potenzial entfalten. Ihre Reise beginnt hier!</p>

            <h2 className={`text-2xl mb-6 mt-12`}>Die neusten Artikel</h2>
            <ArticlesGrid articles={displayedArticles} />
        </>
    )
}
