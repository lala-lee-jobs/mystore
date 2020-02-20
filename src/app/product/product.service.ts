import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  items = [];

  constructor(
    private httpClient: HttpClient
  ) { }

  // 取得商品列表
  getItems() {
    return this.httpClient.get('/assets/product.json');
  }
}
