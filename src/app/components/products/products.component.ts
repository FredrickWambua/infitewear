import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
// import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  product: {name: string, image:string, description:string, category:string, price:number}[]=[]
  public productList: any[] =[]

  constructor(private productService:ProductsService, private cartService: CartService) { 
  }

  ngOnInit(): void {
    this.product = this.productService.getProducts()
    this.productList.push(this.product)
    
    this.productList.forEach((i:any)=>{
      Object.assign(i, {quantiy:1, total:i.price});      
    }); 
  }
  addToCart(prod: any){
    this.cartService.addToCart(prod) 
  }
}
