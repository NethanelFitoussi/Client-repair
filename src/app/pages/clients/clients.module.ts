import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './clients.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { ClientAddComponent } from './client-add/client-add.component';
import { ClientUpdateComponent } from './client-update/client-update.component';


@NgModule({
  declarations: [ClientsComponent, ClientListComponent, ClientDetailComponent, ClientAddComponent, ClientUpdateComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
  ]
})
export class ClientsModule { }
