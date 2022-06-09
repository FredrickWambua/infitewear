import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from 'src/app/components/admin/add-product/add-product.component';
import { AdminComponent } from 'src/app/components/admin/admin/admin.component';

const routes: Routes = [
  {path: '', component: AdminComponent},
  {path: 'addproduct', component: AddProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
