import { Component, Input } from '@angular/core';
import { CommentInterface } from 'src/app/_core/models/shared/CommentInterface';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {

  @Input() comment !: CommentInterface;
  @Input() replies : CommentInterface[] = [];
  replyToCommentVisible : boolean = false;
  replyFormVisible : boolean = false;

  constructor() { }

  onReplyToCommentClick() : void{
    console.log('User clicked');
    this.replyToCommentVisible = true;
  }
  onReplyClick() : void{
    console.log('User clicked');
    this.replyFormVisible = true;
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
  
}
