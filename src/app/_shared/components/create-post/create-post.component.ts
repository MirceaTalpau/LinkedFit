import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MediaItem } from 'src/app/_core/models/shared/MediaItemInterface';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent {

  body: string = '';
  visible: boolean = true;
  fullScreenVisible: boolean = false;
  mediaItems: MediaItem[] = [];
  fullScreenItem: MediaItem | null = null;
  onKeyUp() {
    console.log(this.body);
  }
  
  showDialog() {
    this.visible = true;
  }

  getValue(value: string) {
    this.body = value;
  }

  allowDrop(event: any) {
    event.preventDefault();
  }

  onDrop(event: any) {
    event.preventDefault();
    const files = event.dataTransfer.files;
    const reader = new FileReader();
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file.type.startsWith('image/')) {
        reader.onload = (e: any) => {
          this.mediaItems.push({ type: 'image', url: e.target.result, dateAdded: new Date()});
        };
        reader.readAsDataURL(file);
      } else if (file.type.startsWith('video/')) {
        reader.onload = (e: any) => {
          this.mediaItems.push({ type: 'video', url: e.target.result, dateAdded: new Date()});
        };
        reader.readAsDataURL(file);
      }
      console.log(this.mediaItems[i].url);
    }
  }

  removeItem(item: MediaItem) {
    const index = this.mediaItems.indexOf(item);
    if (index !== -1) {
      this.mediaItems.splice(index, 1);
    }
  }

  showFullScreen(item: MediaItem) {
    this.fullScreenItem = item;
    this.fullScreenVisible = true;
  }

}
