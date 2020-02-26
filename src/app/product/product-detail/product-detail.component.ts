import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/cart/cart.service';
import { switchMap } from 'rxjs/operators';
import { FormGroup, FormBuilder , Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  get quantity(): FormControl {
    return this.form.get('quantity') as FormControl;
  }

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
      quantity: [1, [Validators.required, Validators.max(10)]]
    });
  }

  addToCart(product) {
    const cartItem = Object.assign({}, product, this.form.value);
    console.log('cartItem', cartItem);
    this.cartService.addToCart(cartItem);
  }

  printInput(tInput) {
    console.log('tInput', tInput);
    console.log('tInputValue', tInput.value);
  }

}
