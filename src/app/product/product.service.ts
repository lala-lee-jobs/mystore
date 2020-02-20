import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  items = [];

  constructor() { }

  // 加入商品至商品列表
  addItem(item) {
    this.items.push(item);
  }

  // 取得商品列表
  getItems() {
    return this.items;
  }
}
