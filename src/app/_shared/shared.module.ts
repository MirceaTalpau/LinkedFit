import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CarouselModule } from 'primeng/carousel';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import {ImageModule} from 'primeng/image';
import { DividerModule } from 'primeng/divider';
import {GalleriaModule} from 'primeng/galleria';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { PostComponent } from './components/post/post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommentComponent } from './components/comment/comment.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { UserIconComponent } from './components/user-icon/user-icon.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { ReadMorePipe } from './pipes/read-more.pipe';
import { CarouselComponent } from './components/carousel/carousel.component';



@NgModule({
  declarations: [
    PageNotFoundComponent,
    NavbarComponent,
    PostComponent,
    CommentComponent,
    CreatePostComponent,
    UserIconComponent,
    SearchbarComponent,
    ReadMorePipe,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    RadioButtonModule,
    CalendarModule,
    DialogModule,
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatFormFieldModule,
    CarouselModule,
    DividerModule,
    ImageModule,
    GalleriaModule
  ],
  exports: [
    PageNotFoundComponent,
    NavbarComponent,
    PostComponent,
    CommentComponent,
    CreatePostComponent,
    UserIconComponent,
    SearchbarComponent,
    CarouselComponent
  ]
})
export class SharedModule { }
