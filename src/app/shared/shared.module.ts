import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

import { TopBarComponent } from './top-bar/top-bar.component';

@NgModule({
  declarations: [
    TopBarComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    TopBarComponent,
    CommonModule,
    HttpClientModule
  ]
})
export class SharedModule { }
