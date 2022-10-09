import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GmstoreComponent } from './gmstore/gmstore.component';

const routes: Routes = [
  { path: '', component:  GmstoreComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GmstoreRoutingModule { }
