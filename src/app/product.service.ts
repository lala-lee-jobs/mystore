import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = 'http://localhost:3000/products';

  constructor(
    private httpClient: HttpClient
  ) { }

  getItems() {
    return this.httpClient.get(this.url);
  }

}
