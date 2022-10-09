import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'gmstore' },
  { path: 'gmstore', loadChildren: () => import('./gmstore/gmstore.module').then(m => m.GmstoreModule) },
  { path: 'gmstore/users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
