import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent {

  body: string = '';

  onKeyUp() {
    console.log(this.body);
  }
  
  getValue(value: string) {
    this.body = value;
  }
}
