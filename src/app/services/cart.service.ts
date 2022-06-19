import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList:any=[]
  public productList = new BehaviorSubject<any>([])

  constructor() { }
  getProducts(){
    return this.productList.asObservable();
  }

  setProduct(product: any){
    this.cartItemList.push(product);  
    this.productList.next(product)
  }

  addToCart(product:any){
    this.cartItemList.push(product)
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    this.incQnty()
    
  }
  decQnty(product:any){
    if(product.quantity > 1){
      product.quantity--
      product.total -= product.quantity * product.price

    }
  }

  incQnty():number{
    let quantity = 1
    this.cartItemList.map((i:any)=>{
      quantity++
    })
   return quantity;
  }

  getTotalPrice(): number{
    let grandTotal =0;
    this.cartItemList.map((i:any)=>{
    grandTotal +=i.total 
     
    })
    return grandTotal;
  } 

  removeCartItem(product:any){
    this.cartItemList.map((i:any, index:any)=>{
      if(product.name===i.name){
        this.cartItemList.splice(index,1)
      }
    })
    this.productList.next(this.cartItemList)
  }

  emptyCart(){
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }


}
