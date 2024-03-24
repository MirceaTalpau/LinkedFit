import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxImageCompressService } from 'ngx-image-compress';
import { MediaItem } from 'src/app/_core/models/shared/MediaItemInterface';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit{

  constructor(private fb: FormBuilder, private imageCompress: NgxImageCompressService) { }

  ngOnInit(): void{
    this.recipeForm = this.fb.group({
      name: ['', {Validators: [Validators.required, Validators.minLength(2)], updateOn: 'blur'}],
      description: ['', {Validators: [Validators.required], updateOn: 'blur'}],
      instructions: ['', {Validators: [Validators.required], updateOn: 'blur'}],
      cookingTime: ['', {Validators: [Validators.required], updateOn: 'blur'}],
      servings: ['', {Validators: [Validators.required], updateOn: 'blur'}],
      ingredients: this.fb.array([]),
      calories: [''],
      protein: [''],
      carbs: [''],
      fat: ['']
    });
  }

  recipeForm !: FormGroup;
  normalPost : boolean = false;
  recipePost : boolean = true;
  progressPost : boolean = false;
  isDraggingOver: boolean = false;
  body: string = '';
  visible: boolean = true;
  fullScreenVisible: boolean = false;
  mediaItems: MediaItem[] = [];
  fullScreenItem: MediaItem | null = null;


  get ingredientForms() {
    return this.recipeForm.get('ingredients') as FormArray;
  }

  addIngredient() {
    this.ingredientForms.push(this.fb.group({
      name: [''],
      quantity: ['']
    }));
  }

  deleteIngredient(index: number) {
    this.ingredientForms.removeAt(index);
  }

  resetMediaItems(){
    this.mediaItems = []
  }
  onKeyUp() {
    console.log(this.body);
  }
  
  showDialog(type: string) {
    switch (type) {
      case 'normal':
        this.normalPost = true;
        this.recipePost = false;
        this.progressPost = false;
        break;
      case 'recipe':
        this.normalPost = false;
        this.recipePost = true;
        this.progressPost = false;
        break;
      case 'progress':
        this.normalPost = false;
        this.recipePost = false;
        this.progressPost = true;
        break;
    }
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
    console.log(files);
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
      let mediaType = '';
      if (file.type.startsWith('image/')) {
          mediaType = 'image'; // Set media type to 'image' for image files
          this.compressImage(file).then(compressedFile => {
            this.handleCompressedFile(compressedFile.name);
          });
      } else if (file.type.startsWith('video/')) {
          mediaType = 'video/mp4'; // Set media type to 'video/mp4' for video files
      }
      // Pushes a new MediaItem object to the mediaItems array, maintaining the order
      this.mediaItems.push({ type: mediaType, url: e.target.result, dateAdded: new Date() });
      // Process the next file in the queue recursively
      this.processFileQueue(fileQueue);
    };



    if (file.type.startsWith('image/')) {
        reader.readAsDataURL(file); // Reads the dropped image file as a data URL
    } else if (file.type.startsWith('video/')) {
        reader.readAsDataURL(file); // Reads the dropped video file as a data URL
    }
}

async compressImage(file: File): Promise<File> {
  return new Promise<File>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event: any) => {
          const base64String = event.target.result;
          console.log('Original image:', file);
          this.imageCompress.compressFile(base64String, -1, 50, 50).then(
              result => {
                  // Create a new File object from the compressed image data
                  const compressedFile = new File([result], file.name, { type: file.type });
                  console.log('Compressed image:', compressedFile);
                  resolve(compressedFile);
              },
              error => {
                  console.error('Failed to compress image:', error);
                  reject(error);
              }
          );
      };
      reader.onerror = (error) => {
          console.error('Failed to read image file:', error);
          reject(error);
      };
      reader.readAsDataURL(file);
  });
}

handleCompressedFile(file: string):void {
  console.log(file);
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

  submit(): void {
    if(this.normalPost)
    console.log(this.recipeForm.value);
  }
  


  

}
