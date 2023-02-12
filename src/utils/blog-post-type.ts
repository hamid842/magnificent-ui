export interface IBlogPostsAttributes {
    title:string;
    summary:string;
    content:string;
    createdAt:Date;
    updatedAt:Date;
    publishedAt:Date
}

export interface IBlogPostsData {
    id:number;
    attributes:IBlogPostsAttributes
}

export interface IBlogPosts {
    data:IBlogPostsData[]
}