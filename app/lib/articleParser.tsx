import {Article, ArticleInfo} from '@/app/lib/articleTypes'
import matter from 'gray-matter'
import path from 'path'
import fs from 'fs'

const baseDirectory = process.env.BASE_DIRECTORY

/*
* readArticleBySlug: Article
* readDirectory: Article[]
* readDirectoryRecursively: Article[]
* */
export function readArticleBySlug(slug: string): Article {
    const fullPath = `${slug}.mdx`

    try {
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data, content } = matter(fileContents)

        return {
            slug,
            metadata: {
                title: data.title,
                author: data.author,
                date: data.date,
                ...data
            },
            content,
        }
    } catch(e) {
        return {
            slug,
            metadata: {
                author: undefined,
                title: undefined,
                date: undefined
            },
            content: undefined
        }
    }
}

export function readDirectory(directory = ""): Article[] {
    if (!fs.existsSync(directory)) return []

    const fileNames = fs.readdirSync(directory)
    const posts = fileNames.map((fileName) => {
        const slug = fileName.replace('.mdx', '')
        return readArticleBySlug(`${slug}`)
    })

    return posts
}

export function readDirectoryRecursively(directory: string): Article[] {
    try {
        return fs.readdirSync(directory).map((file) => {
            const absolutePath = path.join(directory, file)

            if (fs.statSync(absolutePath).isDirectory()) return readDirectoryRecursively(absolutePath)
            const slug = absolutePath.replace(".mdx", "")
            return readArticleBySlug(slug)
        }).flat()
    } catch (e) {
        console.log(`Directory: ${directory} not found`)
        return []
    }
}
