import { Component, Input } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  @Input() items: { type: string, url: string, caption?: string}[] = [];
  @Input() indicators: boolean = true;
  currentIndex: number = 0;
  dots: number[] = [0,1,2];
  pressedNext: boolean = false;
  pressedPrev: boolean = false;

  constructor() {}

  next() {
    this.pressedNext = true;
    if (this.currentIndex < this.items.length - 1) {
      this.currentIndex++;
      console.log(this.currentIndex);
      if (this.currentIndex > this.dots[this.dots.length - 1]) {
        this.dots = this.dots.map(dot => dot + 1);
      }
    }
    setTimeout(() => {
      this.pressedNext = false;
    }, 500);
  }

  prev() {
    this.pressedPrev = true;
    if (this.currentIndex > 0) {
      this.currentIndex--;
      console.log(this.currentIndex);
      if (this.currentIndex < this.dots[0]) {
        this.dots = this.dots.map(dot => dot - 1);
      }
    }
    setTimeout(() => {
      this.pressedPrev = false;
    }, 500);
  }
}
