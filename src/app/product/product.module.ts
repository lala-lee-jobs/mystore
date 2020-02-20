import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertComponent } from './product-alert/product-alert.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductAlertComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    ProductListComponent,
    ProductAlertComponent
  ]
})
export class ProductModule { }
