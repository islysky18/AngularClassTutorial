import {
  Component,
  Input,
  OnInit,
  EventEmitter,
  Output,
  OnChanges,
  SimpleChanges,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit, OnChanges, OnDestroy {
  message = [
    { name: 'New Class1' },
    { name: 'New Class2' },
    { name: 'New Class3' },
    { name: 'New Class4' },
  ];
  flag: boolean = true;
  inputValue = '';
  inputValue2 = 'hello';
  password = '';

  @Input()
  counterInChild = 0;

  countertoPasstoParent = 0;

  @Output()
  counterchanged: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  ngOnChanges(changes: SimpleChanges) {
    //clean up work
  }

  ngOnInit() {
    //usually use for call backend to present the data
    this.counterInChild = 4000;
  }

  getMessage() {
    return this.message;
  }

  setValue(val) {
    this.inputValue = val;
  }
  toggle() {
    this.flag = !this.flag;
  }

  increment() {
    this.countertoPasstoParent++;
    this.counterchanged.emit(this.countertoPasstoParent);
  }
  decrement() {
    this.countertoPasstoParent--;
    this.counterchanged.emit(this.countertoPasstoParent);
  }
}
