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

  addItem(item) {
    this.items.push(item);
  }

  getItems() {
    return this.httpClient.get('/assets/product.json');
  }

  clearItems() {
    this.items = [];
    return this.items;
  }
}
