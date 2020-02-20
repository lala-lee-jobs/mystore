import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.productService.getItem(1).subscribe(data => {
      this.product = data;
    });
  }

}
