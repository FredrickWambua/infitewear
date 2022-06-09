import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from 'src/app/components/admin/admin/admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AddProductComponent } from 'src/app/components/admin/add-product/add-product.component';


@NgModule({
  declarations: [AdminComponent,
  AddProductComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
  ],
})
export class AdminModule { }
