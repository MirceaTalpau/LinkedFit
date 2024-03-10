import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MediaItem } from 'src/app/_core/models/shared/MediaItemInterface';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent {

  isDraggingOver: boolean = false;
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

  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.isDraggingOver = true;
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    this.isDraggingOver = false;
  }

  allowDrop(event: any) {
    event.preventDefault();
  }

  onDrop(event: any) {
    this.isDraggingOver = false;
    event.preventDefault(); // Prevents default behavior of the browser for drag and drop
    const files = event.dataTransfer.files; // Retrieves the files dropped onto the component
    const fileQueue: File[] = []; // Queue to store dropped files
    // Add files to the queue
    for (let i = 0; i < files.length; i++) {
        fileQueue.push(files[i]);
    }
    // Process files in the queue
    this.processFileQueue(fileQueue);
}

processFileQueue(fileQueue: File[]) {
    if (fileQueue.length === 0) {
        return; // No files to process
    }
    // Process the first file in the queue
    const file = fileQueue[0];
    fileQueue.shift(); // Remove the first file from the queue
    // Process the file asynchronously
    const reader = new FileReader();
    reader.onload = (e: any) => {
        // Pushes a new MediaItem object to the mediaItems array, maintaining the order
        this.mediaItems.push({ type: 'image', url: e.target.result, dateAdded: new Date() });
        // Process the next file in the queue recursively
        this.processFileQueue(fileQueue);
    };
    if (file.type.startsWith('image/')) {
        reader.readAsDataURL(file); // Reads the dropped image file as a data URL
    } else if (file.type.startsWith('video/')) {
        reader.readAsDataURL(file); // Reads the dropped video file as a data URL
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
