import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = 'http://localhost:3000/products';

  constructor(
    private httpClient: HttpClient
  ) { }

  // 取得商品列表
  getItems() {
    return this.httpClient.get(this.url);
  }
}
