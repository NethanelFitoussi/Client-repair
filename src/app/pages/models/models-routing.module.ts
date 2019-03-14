import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModelsComponent } from './models.component';
import { ModelsAddComponent } from './models-add/models-add.component';

const routes: Routes = [
  {
    path: 'models',
    children: [
      {
        path: '', component: ModelsComponent
      },
      {
        path: 'create', component: ModelsAddComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModelsRoutingModule { }
