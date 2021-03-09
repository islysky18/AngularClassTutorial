import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
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

  constructor() {}

  ngOnInit(): void {}

  getMessage() {
    return this.message;
  }

  setValue(val) {
    this.inputValue = val;
  }
  toggle() {
    this.flag = !this.flag;
  }
}
