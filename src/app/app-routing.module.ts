import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./views/login/login.module').then((mod) => mod.AppLoginModule),
  },
  {
    path: 'new-product',
    loadChildren: () =>
      import('./views/new-product/new-product.module').then(
        (mod) => mod.AppNewProductModule
      ),
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
