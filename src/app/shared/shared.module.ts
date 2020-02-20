import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

import { TopBarComponent } from './top-bar/top-bar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    TopBarComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    TopBarComponent,
    CommonModule,
    HttpClientModule,
    RouterModule
  ]
})
export class SharedModule { }
