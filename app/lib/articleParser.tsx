import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'articles')

export function getArticleBySlug(slug) {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
        slug,
        metadata: data,
        content,
    }
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