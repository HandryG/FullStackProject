import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { RegisterProductsComponent } from './components/register-products/register-products.component';

const routes: Routes = [
  {path:'products', component:ProductsComponent},
  {path:'register', component:RegisterProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
