import {Article} from '@/app/types/Article'
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
                excerpt: data.excerpt,
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
                date: new Date(),
                excerpt: undefined,
            },
            content: undefined
        }
    }
}

export function readDirectory(directory = ""): Article[] {
    if (!fs.existsSync(directory)) return []

    const fileNames = fs.readdirSync(directory)
    return fileNames.map((fileName) => {
        const slug = fileName.replace('.mdx', '')
        return readArticleBySlug(`${slug}`)
    })
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
