import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from './product.service';
import { MytestService } from './services/mytest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  myservice;
  testData;
  counter = 0;
  mycustomObs: Observable<any>;
  constructor(private _myser: ProductService, private mytest: MytestService) {}

  ngOnInit() {
    let message = this._myser.sayHello();
    this.mycustomObs = new Observable((observe) => {
      setInterval(() => {
        this.counter++;
        observe.next(this.counter);
      }, 1000);
    });

    this.mycustomObs.subscribe((data) => {
      console.log(data);
    });
    this.mytest.getData().subscribe(
      (data) => {
        this.testData = data;
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log("I'm finished");
      }
    );
    // let mess = this.mytest.sayHello();
  }
  color: string;
  title = 'class-app';
}
