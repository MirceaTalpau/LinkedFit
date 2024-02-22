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
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { PostComponent } from './components/post/post.component';



@NgModule({
  declarations: [
    PageNotFoundComponent,
    NavbarComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    RadioButtonModule,
    CalendarModule,
    DialogModule,
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    MatIconModule,
    CarouselModule
  ],
  exports: [
    PageNotFoundComponent,
    NavbarComponent,
    PostComponent,
  ]
})
export class SharedModule { }
