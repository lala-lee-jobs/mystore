import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ShippingService } from 'src/app/shipping/shipping.service';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products;
  shipping;

  constructor(
    // 注入服務到元件中
    private productService: ProductService,
    private shippingService: ShippingService
  ) { }

  ngOnInit(): void {
    //  this.productService.getItems().subscribe(data => {
    //    this.products = data;
    //  });
    forkJoin([
      this.productService.getItems(),
      this.shippingService.getItems()
    ]).pipe(
      map(([products, shipping]) => ({products, shipping}))
    ).subscribe(data => {
      console.log('data', data);
      this.products = data.products;
      this.shipping = data.shipping;
    });
  }

  share(product) {
    window.alert(`The product ${product.name} has been shared!`);
  }

  onNotify() {
    window.alert('Got Notify Me Click');
  }

}
