import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GmstoreRoutingModule } from './gmstore-routing.module';
import { GmstoreComponent } from './gmstore/gmstore.component';

@NgModule({
  declarations: [
    GmstoreComponent
  ],
  imports: [
    CommonModule,
    GmstoreRoutingModule
  ]
})
export class GmstoreModule { }
