import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  carts;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.carts = this.cartService.getItems();
  }

}
