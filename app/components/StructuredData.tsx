import Script from "next/script";
import Head from "next/head";

type Props = {
    data: {
        headline: string;
        description: string;
        slug: string;
        author: string;
        datePublished: string;
    }
}

const StructuredDate = ({ data }: Props) => {
    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: data.headline,
        description: data.description,
        author: [
            {
                '@type': 'Person',
                name: data.author
            }
        ],
        image: `${process.env.FULL_URL}/images/${data.slug}.webp`,
        datePublished: data.datePublished,
    }
    return (
        <script
            key={`structured-data`}
            type={`application/ld+json`}
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    )
}

export default StructuredDate
