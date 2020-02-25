import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/cart/cart.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product;
  quantity;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(params => {
        return this.productService.getItem(params.id);
      })
    ).subscribe(data => {
      this.product = data;
    });
  }

  addToCart(product, buyForm) {
    console.log('product', product);
    console.log('buyForm', buyForm.value);
    const formValue = buyForm.value;
    const carItem = Object.assign({}, product, {quantity: formValue.quantity });
    console.log('carItem', carItem);
    this.cartService.addToCart(carItem);
  }

  printInput(tInput) {
    console.log('tInput', tInput);
    console.log('tInputValue', tInput.value);
  }

}
