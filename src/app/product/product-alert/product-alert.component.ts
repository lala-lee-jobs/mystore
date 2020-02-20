import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alert',
  templateUrl: './product-alert.component.html',
  styleUrls: ['./product-alert.component.scss']
})
export class ProductAlertComponent implements OnInit {

  @Input() product;
  @Output() notifyEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  notify() {
    this.notifyEvent.emit();
  }

}
