import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/cart/cart.service';
import { switchMap } from 'rxjs/operators';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product;
  form: FormGroup;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private cartService: CartService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(params => {
        return this.productService.getItem(params.id);
      })
    ).subscribe(data => {
      this.product = data;
    });
    this.form = this.fb.group({
      quantity: 1
    });
  }

  addToCart(product) {
    this.cartService.addToCart(product);
  }

  printInput(tInput) {
    console.log('tInput', tInput);
    console.log('tInputValue', tInput.value);
  }

}
