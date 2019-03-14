import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ModelsRoutingModule } from './models-routing.module';
import { ModelsComponent } from './models.component';
import { ModelsAddComponent } from './models-add/models-add.component';

@NgModule({
  declarations: [ModelsComponent, ModelsAddComponent],
  imports: [
    CommonModule,
    ModelsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class ModelsModule { }
