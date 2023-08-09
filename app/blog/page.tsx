import {getArticles, getArticleBySlug} from '@/app/lib/articleParser'
import { GetStaticProps, GetStaticPaths } from 'next'
import { serialize } from 'next-mdx-remote/serialize'
import matter from 'gray-matter'
import path from 'path'
import fs from 'fs'

const postsDirectory = path.join(process.cwd(), 'articles')

export const getStaticProps: GetStaticProps = async ({ params }) => {
    // Check if params exists and if params.slug is string
    // const slug = params && typeof params.slug === 'string' ? params.slug : ""
    // const content = fs.readFileSync(path.join(postsDirectory, `${slug}.mdx`), 'utf8')
    // const { data, content: rawContent } = matter(content)
    // const mdxSource = await serialize(rawContent, { scope: data })

    // return { props: { source: mdxSource, frontMatter: data } }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getArticles()
        .map((post) => ({params: { slug: post.slug }}))

    return {
        paths,
        fallback: false,
    }
}

const BlogPage = ({ paths }): JSX.Element => {
    return (
        <>
            {paths}
            <ul>
                <li>Path 1</li>
                <li>Path 2</li>
                <li>Path 3</li>
            </ul>
        </>
    )
}

export default BlogPage