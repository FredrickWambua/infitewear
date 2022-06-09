import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from 'src/app/components/admin/admin/admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AddProductComponent } from 'src/app/components/admin/add-product/add-product.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AdminComponent,
  AddProductComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ],
})
export class AdminModule { }
