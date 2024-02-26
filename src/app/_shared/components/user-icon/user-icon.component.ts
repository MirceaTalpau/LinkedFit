import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-icon',
  templateUrl: './user-icon.component.html',
  styleUrls: ['./user-icon.component.scss']
})
export class UserIconComponent {

  @Input() iconURI: string = '';
  @Input() userID: number = 0;

  onUserClick(): void {
    console.log('User icon clicked');
  }
}
