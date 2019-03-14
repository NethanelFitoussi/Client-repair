import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrandsComponent } from './brands.component';
import { BrandAddComponent } from './brand-add/brand-add.component';

const routes: Routes = [
  {
    path: 'brands',
    children: [
      {
        path: '', component: BrandsComponent
      },
      {
        path: 'create', component: BrandAddComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrandsRoutingModule { }
