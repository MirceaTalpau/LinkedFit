import { FormControl, FormGroup } from '@angular/forms';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { PostInterface } from 'src/app/_core/models/shared/PostInterface';
import { CommentsService } from 'src/app/_core/api/comments.service';
import { CommentInterface } from 'src/app/_core/models/shared/CommentInterface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],

})
export class PostComponent {


  constructor(private _commentsService: CommentsService) { }

  @Input() post!: PostInterface;
  comment: string = '';
  comments: CommentInterface[] = [
    
      {
        "commentId": 1,
        "postId": 101,
        "userId": 201,
        "parentId": null,
        "userName": "JohnDoe",
        "userIconUrl": "https://example.com/user1.jpg",
        "body": "This is the first comment.",
        "createdAt": new Date("2024-02-23T08:30:00Z"),
        "likesCount": 10
      },
      {
        "commentId": 2,
        "postId": 101,
        "userId": 202,
        "parentId": 1,
        "userName": "JaneSmith",
        "userIconUrl": "https://example.com/user2.jpg",
        "body": "Replying to the first comment.",
        "createdAt": new Date("2024-02-23T09:00:00Z"),
        "likesCount": 5
      },
      {
        "commentId": 3,
        "postId": 102,
        "userId": 203,
        "parentId": 1,
        "userName": "AliceJohnson",
        "userIconUrl": "https://example.com/user3.jpg",
        "body": "Replying to the first comment.",
        "createdAt": new Date("2024-02-23T10:15:00Z"),
        "likesCount": 3
      },
      {
        "commentId": 4,
        "postId": 103,
        "userId": 204,
        "parentId": null,
        "userName": "EmilyBrown",
        "userIconUrl": "https://example.com/user4.jpg",
        "body": "Here's another comment.",
        "createdAt": new Date("2024-02-23T11:20:00Z"),
        "likesCount": 8
      },
      {
        "commentId": 5,
        "postId": 103,
        "userId": 205,
        "parentId": 4,
        "userName": "MichaelJohnson",
        "userIconUrl": "https://example.com/user5.jpg",
        "body": "Replying to the previous comment.",
        "createdAt": new Date("2024-02-23T12:00:00Z"),
        "likesCount": 2
      },
      {
        "commentId": 6,
        "postId": 104,
        "userId": 206,
        "parentId": null,
        "userName": "SophiaLee",
        "userIconUrl": "https://example.com/user6.jpg",
        "body": "This is a comment on a different post.",
        "createdAt": new Date("2024-02-23T13:10:00Z"),
        "likesCount": 6
      },
      {
        "commentId": 7,
        "postId": 105,
        "userId": 207,
        "parentId": null,
        "userName": "DanielTaylor",
        "userIconUrl": "https://example.com/user7.jpg",
        "body": "Commenting here.",
        "createdAt": new Date("2024-02-23T14:20:00Z"),
        "likesCount": 12
      },
      {
        "commentId": 8,
        "postId": 105,
        "userId": 208,
        "parentId": 7,
        "userName": "OliviaAnderson",
        "userIconUrl": "https://example.com/user8.jpg",
        "body": "Replying to the previous comment.",
        "createdAt": new Date("2024-02-23T15:00:00Z"),
        "likesCount": 3
      },
      {
        "commentId": 9,
        "postId": 106,
        "userId": 209,
        "parentId": null,
        "userName": "JamesWilson",
        "userIconUrl": "https://example.com/user9.jpg",
        "body": "Yet another comment.",
        "createdAt": new Date("2024-02-23T16:30:00Z"),
        "likesCount": 7
      },
      {
        "commentId": 10,
        "postId": 107,
        "userId": 210,
        "parentId": null,
        "userName": "EmmaMartinez",
        "userIconUrl": "https://example.com/user10.jpg",
        "body": "Commenting on this post.",
        "createdAt": new Date("2024-02-23T17:40:00Z"),
        "likesCount": 9
      },
      {
        "commentId": 11,
        "postId": 107,
        "userId": 211,
        "parentId": 10,
        "userName": "WilliamGarcia",
        "userIconUrl": "https://example.com/user11.jpg",
        "body": "Replying to the previous comment.",
        "createdAt": new Date("2024-02-23T18:00:00Z"),
        "likesCount": 4
      },
      {
        "commentId": 12,
        "postId": 108,
        "userId": 212,
        "parentId": null,
        "userName": "CharlotteRodriguez",
        "userIconUrl": "https://example.com/user12.jpg",
        "body": "Here's a comment on a different post.",
        "createdAt": new Date("2024-02-23T19:20:00Z"),
        "likesCount": 6
      },
      {
        "commentId": 13,
        "postId": 109,
        "userId": 213,
        "parentId": null,
        "userName": "BenjaminLopez",
        "userIconUrl": "https://example.com/user13.jpg",
        "body": "Commenting here.",
        "createdAt": new Date("2024-02-23T20:30:00Z"),
        "likesCount": 11
      },
      {
        "commentId": 14,
        "postId": 109,
        "userId": 214,
        "parentId": 13,
        "userName": "MiaHernandez",
        "userIconUrl": "https://example.com/user14.jpg",
        "body": "Replying to the previous comment.",
        "createdAt": new Date("2024-02-23T21:00:00Z"),
        "likesCount": 3
      },
      {
        "commentId": 15,
        "postId": 110,
        "userId": 215,
        "parentId": null,
        "userName": "EthanPerez",
        "userIconUrl": "https://example.com/user15.jpg",
        "body": "Yet another comment.",
        "createdAt": new Date("2024-02-23T22:15:00Z"),
        "likesCount": 8
      },
      {
        "commentId": 16,
        "postId": 111,
        "userId": 216,
        "parentId": null,
        "userName": "IsabellaSanchez",
        "userIconUrl": "https://example.com/user16.jpg",
        "body": "Commenting on this post.",
        "createdAt": new Date("2024-02-23T23:30:00Z"),
        "likesCount": 10
      },
      {
        "commentId": 17,
        "postId": 111,
        "userId": 217,
        "parentId": 16,
        "userName": "AlexanderRamirez",
        "userIconUrl": "https://example.com/user17.jpg",
        "body": "Replying to the previous comment.",
        "createdAt": new Date("2024-02-23T23:45:00Z"),
        "likesCount": 2
      },
      {
        "commentId": 18,
        "postId": 112,
        "userId": 218,
        "parentId": null,
        "userName": "AvaTorres",
        "userIconUrl": "https://example.com/user18.jpg",
        "body": "Here's a comment on a different post.",
        "createdAt": new Date("2024-02-24T00:10:00Z"),
        "likesCount": 7
      },
      {
        "commentId": 19,
        "postId": 113,
        "userId": 219,
        "parentId": null,
        "userName": "NoahGonzalez",
        "userIconUrl": "https://example.com/user19.jpg",
        "body": "Commenting here.",
        "createdAt": new Date("2024-02-24T01:20:00Z"),
        "likesCount": 9
      },
      {
        "commentId": 20,
        "postId": 113,
        "userId": 220,
        "parentId": 19,
        "userName": "ChloeNguyen",
        "userIconUrl": "https://example.com/user20.jpg",
        "body": "Replying to the previous comment.",
        "createdAt": new Date("2024-02-24T01:45:00Z"),
        "likesCount": 4
      }
    ];
  ngOnInit(): void {
   
  }

  getCommentFormValue(value: string) {
    this.comment = value;
  }
 
  fetchComments() {
    this._commentsService.getComments().subscribe((comments) => {
      this.comments = comments;
  });
  }

  splitPostContent(content: string): string {
    const words = content.split(' ');
    const limit = 35;
    if(words.length > limit) {
      return words.slice(0, limit).join(' ') + '...';
    } else {
      return content;
    }
  }



  calculateTimeSincePost(postTime: Date): string {
    const currentTime :Date = new Date();
    const timeDifference = currentTime.getTime() - postTime.getTime();

    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if(days > 365){
      return postTime.toLocaleDateString(undefined, { day: 'numeric', month: 'long', year: 'numeric' });
    }
    else if(days > 7){
      return postTime.toLocaleDateString(undefined, { day: 'numeric', month: 'long' });
    }
    else if (days > 0 && days <7 ){
      return `${days} days ago`
    } else if (hours > 0) {
      return `${hours} hours ago`
    } else if (minutes === 1){
      return `${minutes} minute ago` 
    } else if (minutes > 1) {
      return `${minutes} minutes ago`
    } else {
      return `${seconds} seconds ago`
    }

  }

  onLikeClick(): void {
    console.log('Like clicked');
  }

  onCommentClick(): void {
    console.log('Reply clicked');
  }

  onShareClick(): void {
    console.log('Share clicked')
  }

  onUserClick(): void {
    console.log('User clicked');
  }

  onPostClick(): void {
    console.log('Post clicked');
  }

  onCommentSubmit(): void {
    console.log(this.comment);
  }
}

