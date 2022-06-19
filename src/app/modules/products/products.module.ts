import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from 'src/app/components/products/products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { FilterPipe } from 'src/app/pipes/filter.pipe';


@NgModule({
  declarations: [ProductsComponent, FilterPipe],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    
  ]
})
export class ProductsModule { }
