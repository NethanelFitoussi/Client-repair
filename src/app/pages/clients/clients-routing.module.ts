import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientDetailComponent } from './client-detail/client-detail.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientAddComponent } from './client-add/client-add.component';

const routes: Routes = [
  {  
    path: 'clients',
    children: [
      {
        path: '', component: ClientListComponent
      },
      {
        path: ':id', component: ClientDetailComponent
      },
      {
        path: 'create', component: ClientAddComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
