import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent {

  body: string = '';
  visible: boolean = true;
  onKeyUp() {
    console.log(this.body);
  }
  
  showDialog() {
    this.visible = true;
  }

  getValue(value: string) {
    this.body = value;
  }
}
