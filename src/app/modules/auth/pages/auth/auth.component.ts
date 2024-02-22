import { Component } from '@angular/core';
import { Post } from 'src/app/_core/models/shared/Post';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  posts: Post[] = [
    {
      userName: 'John Doe',
      userIconUrl: 'assets/blank-profile.jpeg',
      postImagesUrls: ['assets/blank-profile.jpeg', 'assets/blank-profile.jpeg'],
      postContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus augue quis feugiat maximus. Nam mollis dictum ante, a rutrum nunc pellentesque non. Nam laoreet elit nec libero accumsan, ut tempus eros facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis ac velit non elementum. Integer tempor, arcu eu maximus iaculis, erat felis facilisis eros, eget commodo sapien odio vel urna. Etiam vel mi a metus hendrerit mollis vitae vitae dui. In ac felis ac ligula finibus placerat vitae non odio. Maecenas dapibus lacus ac odio facilisis, a fringilla turpis vehicula. Maecenas tellus purus, lobortis id urna vel, euismod tempor turpis. Donec id blandit odio, vitae rhoncus enim. Nulla a ipsum et est consectetur iaculis.',
      postTime: new Date('2024-02-21T12:00:00'),
      likesCount: 20,
      commentsCount: 33,
      sharesCount: 11
    },
    {
      userName: 'John Doe',
      userIconUrl: 'assets/blank-profile.jpeg',
      postImagesUrls: null,
      postContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus augue quis feugiat maximus. Nam mollis dictum ante, a rutrum nunc pellentesque non. Nam laoreet elit nec libero accumsan, ut tempus eros facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis ac velit non elementum. Integer tempor, arcu eu maximus iaculis, erat felis facilisis eros, eget commodo sapien odio vel urna. Etiam vel mi a metus hendrerit mollis vitae vitae dui. In ac felis ac ligula finibus placerat vitae non odio. Maecenas dapibus lacus ac odio facilisis, a fringilla turpis vehicula. Maecenas tellus purus, lobortis id urna vel, euismod tempor turpis. Donec id blandit odio, vitae rhoncus enim. Nulla a ipsum et est consectetur iaculis.',
      postTime: new Date('2024-02-21T12:00:00'),
      likesCount: 20,
      commentsCount: 33,
      sharesCount: 11
    },
    {
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
