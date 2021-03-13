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
    return this.httpClient.get('https://localhost:44326/api/Quote'); ///call to backend
  }

  postData(item) {
    return this.httpClient.post('', item);
  }

  deleData() {
    return this.httpClient.delete('api/values/4');
  }

  updateData() {
    return this.httpClient.put('', {});
  }

  sayHello() {
    return 'Hi from test service';
  }
}
