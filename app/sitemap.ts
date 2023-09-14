import { MetadataRoute } from 'next'
import {readDirectoryRecursively} from "@/app/lib/articleParser";

export default function sitemap(): MetadataRoute.Sitemap {
    const allArticles = readDirectoryRecursively(`${process.env.BASE_DIRECTORY}`)
    const allDynamicRoutes = allArticles.map((article) => {
        return {
            url: `${process.env.FULL_URL}/${article.slug.replaceAll("\\","/")}`,
            lastModified: new Date(),
            changeFrequency: `weekly`,
            priority: 0.5
        }
    })

    return [
        {
            url: `${process.env.FULL_URL}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${process.env.FULL_URL}/blog`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        ...allDynamicRoutes,
        {
            url: `${process.env.FULL_URL}/legals/imprint`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.2,
        },
        {
            url: `${process.env.FULL_URL}/legals/privacy-policy`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.2,
        },
    ]
}
