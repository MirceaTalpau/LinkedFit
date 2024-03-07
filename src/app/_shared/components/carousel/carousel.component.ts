import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  @Input() items: { type: string, url: string, caption?: string}[] = [];
  currentIndex: number = 0;
  dots: number[] = [0,1,2]

  constructor() {}

  next() {
    if (this.currentIndex < this.items.length - 1) {
      this.currentIndex++;
      if (this.currentIndex > this.dots[this.dots.length - 1]) {
        this.dots = this.dots.map(dot => dot + 1);
      }
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      if (this.currentIndex < this.dots[0]) {
        this.dots = this.dots.map(dot => dot - 1);
      }
    }
  }
}
