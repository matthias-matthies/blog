import { MetadataRoute } from 'next'
import {readDirectoryRecursively} from "@/app/lib/articleParser";

const baseUrl = `${process.env.BASE_URL}`
export default function sitemap(): MetadataRoute.Sitemap {
    const allArticles = readDirectoryRecursively(`${process.env.BASE_DIRECTORY}`)
    const articleRoutesMetadata = allArticles.map((article) => ({
        url: `${baseUrl}/${article.slug}`,
        lastModified: article.metadata.date
    }))

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/legals/imprint`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/legals/privacy-policy`,
            lastModified: new Date(),
        },
        ...articleRoutesMetadata
    ]
}
