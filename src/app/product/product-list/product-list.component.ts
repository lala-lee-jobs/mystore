import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products;

  constructor(
    // 注入服務到元件中
    private productService: ProductService
  ) { }

  ngOnInit(): void {
     this.productService.getItems().subscribe(data => {
       this.products = data;
     });
  }

  share(product) {
    window.alert(`The product ${product.name} has been shared!`);
  }

  onNotify() {
    window.alert('Got Notify Me Click');
  }

}
