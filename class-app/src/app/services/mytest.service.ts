import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductService } from '../product.service';

//make sure we can inject something from outside
@Injectable()
export class MytestService {
  constructor(
    private mydataService: ProductService,
    private httpClient: HttpClient
  ) {}

  getData() {
    return this.httpClient.get('assets/data.json'); ///call to backend
  }

  sayHello() {
    return 'Hi from test service';
  }
}
