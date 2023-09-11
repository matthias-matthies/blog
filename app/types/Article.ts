export interface ArticleMetadata {
    author: string | undefined;
    title: string | undefined;
    date: Date;
    excerpt: string | undefined;
}

export interface Article {
    image: string;
    slug: string;
    metadata: ArticleMetadata;
    content: string | undefined;
}

export interface ArticleInfo {
    slug: string;
    metadata: ArticleMetadata;
}
