import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
  textGroup: FormGroup = new FormGroup({});

  @Input() iconSrc: string = '';
  @Input() userId: number = 0;
  @Input() button = false;
  @Input() placeholder: string = 'Search...';
  @Output() textEvent = new EventEmitter<string>();
  @Output() buttonEvent = new EventEmitter<void>();
  
  returnValue() {
    this.textEvent.emit(this.textGroup.value.textForm);
  }

  buttonClick() {
    this.buttonEvent.emit();
  }

  iconClick() {
    console.log('User icon clicked');
  }

  ngOnInit() {
    this.textGroup = new FormGroup({
      textForm: new FormControl('')
    });
  }

}
