import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  // public product: {name: string, image:string, description:string, category:string, price:number}[]=[]
  public productList: Product[] =[]
  public searchQuery : string = "";
  public sortedCategory: any; 
  p: number = 1;


  constructor(private productService:ProductsService, private cartService: CartService) { 
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data=>{
      this.productList = data;
      console.log(data);
      this.productList.forEach((prod:any)=>{
        Object.assign(prod, {quantity:1, total: prod.price});
      })
    })
    this.sortedCategory = this.productList

    this.productService.search
    .subscribe(val=>{
      this.searchQuery = val;
    })
    
  }
  addToCart(prod: any){
    
    this.cartService.addToCart(prod)
    
  }
  sortcategory(category:string){
    this.sortedCategory = this.productList.filter((a:any)=>{
      if(a.category==category || category==''){
        return a;
      }
    })
  }
}
