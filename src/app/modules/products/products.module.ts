import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from 'src/app/components/products/products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { FilterPipe } from 'src/app/pipes/filter.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [ProductsComponent, FilterPipe],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    NgxPaginationModule,
    HttpClientModule
    
  ]
})
export class ProductsModule { }
