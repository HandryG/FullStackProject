import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAuditComponent } from './components/product-audit/product-audit.component';
import { ProductsComponent } from './components/products/products.component';
import { RegisterProductsComponent } from './components/register-products/register-products.component';

const routes: Routes = [
  {path:'products', component:ProductsComponent},
  {path:'register', component:RegisterProductsComponent},
  {path:'auditoria', component: ProductAuditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
