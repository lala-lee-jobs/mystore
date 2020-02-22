import { Component, OnInit } from '@angular/core';
import { ShippingService } from '../shipping.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {

  shippingCosts;

  constructor(
    private shippingService: ShippingService
  ) { }

  ngOnInit(): void {
    this.shippingService.getItems()
    .pipe(
        map((results: any[]) => results.filter(r => r.price < 10)),
        map((results: any[]) => [{type: 'Please Select'}, ...results])
    ).subscribe(
        (data) => {
            console.log(data);
            this.shippingCosts = data;
        }
    );
  }

}
