import {recursivlyGetArticles} from "@/app/lib/articleParser";
import fs from "fs";
import path from "path";

// const postsDirectory = path.join(process.cwd(), 'articles')

/* export const getStaticProps: GetStaticProps = async ({ params }) => {
    // Check if params exists and if params.slug is string
    const slug = params && typeof params.slug === 'string' ? params.slug : ""
    const content = fs.readFileSync(path.join(postsDirectory, `${slug}.mdx`), 'utf8')
    const { data, content: rawContent } = matter(content)
    const mdxSource = await serialize(rawContent, { scope: data })

    return { props: { source: mdxSource, frontMatter: data } }
} */

/* export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getArticles()
        .map((post) => ({params: { slug: post.slug }}))

    return {
        paths,
        fallback: false,
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

} */


async function getData() {
    const articleDirectory = "articles"
    return recursivlyGetArticles(articleDirectory)
}

const BlogPage = (): JSX.Element => {
    const posts = getData()
    console.log(posts)
    return (
        <>
            <ul>
                <li>Path 1</li>
                <li>Path 2</li>
                <li>Path 3</li>
            </ul>
        </>
    )
}

export default BlogPage
