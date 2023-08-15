export interface ArticleMetadata {
    author: string | undefined;
    title: string | undefined;
    date: Date | undefined;
}

export interface Article {
    slug: string;
    metadata: ArticleMetadata;
    content: string | undefined;
}

export interface ArticleInfo {
    slug: string;
    metadata: ArticleMetadata;
}
