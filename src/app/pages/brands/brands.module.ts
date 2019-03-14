import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrandsRoutingModule } from './brands-routing.module';
import { BrandsComponent } from './brands.component';
import { BrandAddComponent } from './brand-add/brand-add.component';

@NgModule({
  declarations: [BrandsComponent, BrandAddComponent],
  imports: [
    CommonModule,
    BrandsRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BrandsModule { }
