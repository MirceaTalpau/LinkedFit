export interface CommentInterface{
    commentId: number;
    postId: number;
    userId: number;
    parentId: number | null;
    userName: string;
    userIconUrl: string;
    body: string;
    createdAt: Date;
    likesCount: number;
    
}