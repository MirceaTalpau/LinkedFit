export interface PostInterface{
    postId: number;
    userId: number;
    userName: string;
    userIconUrl: string;
    media:{
         type: string, 
         url: string, 
         caption?: string}[];
    postContent: string;
    postTime: Date;
    likesCount: number;
    commentsCount: number;
    sharesCount: number;
}