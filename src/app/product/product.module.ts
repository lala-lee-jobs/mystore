import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertComponent } from './product-alert/product-alert.component';
import { SharedModule } from '../shared/shared.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductAlertComponent,
    ProductDetailComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    ProductListComponent,
    ProductAlertComponent,
    ProductDetailComponent
  ]
})
export class ProductModule { }
