import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'articles')

export function getArticleBySlug(slug: string) {
    const fullPath = `${slug}.mdx`
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
        slug,
        metadata: data,
        content,
    }
}

export function recursivlyGetArticles(directory: string): {slug: string, metadata: {[p: string]: any}} {
    return fs.readdirSync(directory).map((file) => {
        const absolutePath = path.join(directory, file)

        if (fs.statSync(absolutePath).isDirectory()) return recursivlyGetArticles(absolutePath)
        const slug = absolutePath.replace(".mdx", "")
        const { metadata } = getArticleBySlug(slug)

        return {
            slug,
            metadata
        }
    })
}

export function getArticles() {
    const fileNames = fs.readdirSync(postsDirectory)
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
