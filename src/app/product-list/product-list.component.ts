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
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.productService.addItem({
      name: 'Phone XL',
      price: 799,
      description: 'A large phone with one of the best screens'
    });
    this.productService.addItem({
      name: 'Phone Mini',
      price: 699,
      description: 'A great phone with one of the best cameras'
    });
    this.products = this.productService.getItems();
  }

  share(product) {
    window.alert(`The product ${product.name} has been shared!`);
  }

  onNotify() {
    window.alert('Got Notify Me Click');
  }

}
