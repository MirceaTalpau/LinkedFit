import { Component, Input } from '@angular/core';
import { Post } from 'src/app/_core/models/shared/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  // @Input() userName!: string;
  // @Input() userIconUrl!: string;
  // @Input() postContent!: string;
  // @Input() postTime!: Date;
  // @Input() likesCount!: number;
  // @Input() commentsCount!: number;
  // @Input() sharesCount!: number;
  @Input() post!: Post;

  // post: Post = {
  //   userName: 'John Doe',
  //   userIconUrl: 'assets/blank-profile.jpeg',
  //   postImagesUrls: ['assets/blank-profile.jpeg', 'assets/blank-profile.jpeg'],
  //   postContent: 'This is a post content',
  //   postTime: new Date('2024-02-21T12:00:00'),
  //   likesCount: 20,
  //   commentsCount: 33,
  //   sharesCount: 11
  // };


  calculateTimeSincePost(postTime: Date): string {
    const currentTime :Date = new Date();
    const timeDifference = currentTime.getTime() - postTime.getTime();

    const seconds = timeDifference / 1000;
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0 ){
      return `${days} days ago`
    } else if (hours > 0) {
      return `${hours} hours ago`
    } else if (minutes > 0) {
      return `${minutes} minutes ago`
    } else {
      return `${seconds} seconds ago`
    }

  }

  onReplyClick(): void {
    console.log('Reply clicked');
  }
}

