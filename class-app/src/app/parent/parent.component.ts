import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  CounterInParent = 0;

  CounterFromChild = 0;

  constructor() {}

  ngOnInit() {
    let xyz = this.mychildcomponent;
    let x = this.myinput;
  }
  incrementCounter() {
    this.CounterInParent++;
    console.log(this.CounterInParent);
  }

  @ViewChild(ChildComponent, { static: true })
  mychildcomponent: ChildComponent;

  @ViewChild('myinput', { static: true }) myinput;

  myEventHandler(val: any) {
    this.CounterFromChild = val;
  }
}
