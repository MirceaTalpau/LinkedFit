import { CommentsService } from './../../../../_core/api/comments.service';
import { Component, OnInit } from '@angular/core';
import { CommentInterface } from 'src/app/_core/models/shared/CommentInterface';
import { PostInterface } from 'src/app/_core/models/shared/PostInterface';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  

  posts: PostInterface[] = [
    {
      postId: 1,
      userId: 1,
      userName: 'John Doe',
      userIconUrl: 'assets/blank-profile.jpeg',
      postImagesUrls: ['assets/blank-profile.jpeg', 'assets/blank-profile.jpeg'],
      postContent: 'This is a post content, asdasd ad,asda d,asd asdasdasd,asd asdas dasdasd',
      postTime: new Date('2024-01-21T12:00:00'),
      likesCount: 20,
      commentsCount: 33,
      sharesCount: 11
    },
    {
      postId: 1,
      userId: 1,
      userName: 'John Doe',
      userIconUrl: 'assets/blank-profile.jpeg',
      postImagesUrls: [
        'assets/UserIcons/first.jpg',
        'assets/UserIcons/second.jpg',
        'assets/UserIcons/third.jpg',
        'assets/UserIcons/4th.jpg',
        'assets/UserIcons/5th.jpg',
      ],
      postContent: 'This is a post content, asdasd ad,asda d,asd asdasdasd,asd asdas dasdasd',
      postTime: new Date('2024-02-21T12:00:00'),
      likesCount: 20,
      commentsCount: 33,
      sharesCount: 11
    },
    {
      postId: 2,
      userId: 1,
      userName: 'John Doe',
      userIconUrl: 'assets/blank-profile.jpeg',
      postImagesUrls: null,
      postContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus augue quis feugiat maximus. Nam mollis dictum ante, a rutrum nunc pellentesque non. Nam laoreet elit nec libero accumsan, ut tempus eros facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis ac velit non elementum. Integer tempor, arcu eu maximus iaculis, erat felis facilisis eros, eget commodo sapien odio vel urna. Etiam vel mi a metus hendrerit mollis vitae vitae dui. In ac felis ac ligula finibus placerat vitae non odio. Maecenas dapibus lacus ac odio facilisis, a fringilla turpis vehicula. Maecenas tellus purus, lobortis id urna vel, euismod tempor turpis. Donec id blandit odio, vitae rhoncus enim. Nulla a ipsum et est consectetur iaculis.',
      postTime: new Date('2024-02-22T14:10:00'),
      likesCount: 20,
      commentsCount: 33,
      sharesCount: 11
    },
    {
      postId: 3,
      userId: 1,
      userName: 'John Doe',
      userIconUrl: 'assets/blank-profile.jpeg',
      postImagesUrls: ['assets/blank-profile.jpeg'],
      postContent: 'This is a post content',
      postTime: new Date('2024-02-21T12:00:00'),
      likesCount: 20,
      commentsCount: 33,
      sharesCount: 11
    },
  ]
}
