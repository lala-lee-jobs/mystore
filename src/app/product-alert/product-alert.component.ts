import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-alert',
  templateUrl: './product-alert.component.html',
  styleUrls: ['./product-alert.component.scss']
})
export class ProductAlertComponent implements OnInit {

  @Input() product;

  constructor() { }

  ngOnInit(): void {
  }

}
