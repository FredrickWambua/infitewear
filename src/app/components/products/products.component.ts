import { Component, OnInit } from '@angular/core';
// import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: {name: string, image:string, description:string, category:string, price:number}[]=[]

  constructor(private productService:ProductsService) { 
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts()
    console.log(this.products);
    
  }

}
