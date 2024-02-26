export interface PostInterface{
    postId: number;
    userId: number;
    userName: string;
    userIconUrl: string;
    postImagesUrls : string[] | null;
    postContent: string;
    postTime: Date;
    likesCount: number;
    commentsCount: number;
    sharesCount: number;
}