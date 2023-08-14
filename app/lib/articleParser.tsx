import {Article, ArticleInfo} from '@/app/lib/articleTypes'
import matter from 'gray-matter'
import path from 'path'
import fs from 'fs'

const baseDirectory = process.env.BASE_DIRECTORY

export function getArticleBySlug(slug: string): Article {
    const fullPath = `${process.env.ARTICLE_DIRECTORY}/${slug}.mdx`

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
                author: "404",
                title: "404",
                date: new Date()
            },
            content: "Error 404: Not found"
        }
    }
}

export function recursivelyGetArticles(directory: string): ArticleInfo[] {
    try {
        return fs.readdirSync(directory).map((file) => {
            const absolutePath = path.join(directory, file)

            if (fs.statSync(absolutePath).isDirectory()) return recursivelyGetArticles(absolutePath)
            const slug = absolutePath.replace(".mdx", "")
            const { metadata } = getArticleBySlug(slug)

            return {
                slug,
                metadata
            }
        }).flat()
    } catch (e) {
        console.log(`Directory: ${directory} not found`)
        return []
    }
}

export function readDirectory(directory = ""): ArticleInfo[] {
    console.log(directory)
    const fullPath = `${process.env.ARTICLE_DIRECTORY}/${directory}`

    if (!fs.existsSync(fullPath)) return []

    const fileNames = fs.readdirSync(fullPath)
    const posts = fileNames.map((fileName) => {
        const slug = fileName.replace('.mdx', '')
        const { metadata } = getArticleBySlug(slug)

        return {
            slug,
            metadata,
        }
    })

    return posts
}

export function readArticleBySlug(slug: string): Article {
    const fullPath = `${baseDirectory}/${slug}.mdx`

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

/*
* readDirectory: array mixed(articleinfo | directoryinfo)
* readDirectoryRecursively: array article
* getArticleBySlug: Article
* */
