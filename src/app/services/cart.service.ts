import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList:[]=[]
  public productList = new BehaviorSubject<any>([])

  constructor() { }
  getProducts(){
    return this.productList.asObservable();
  }

  setProduct(product: []){
    this.cartItemList.push(...product);
    this.productList.next(product)
  }

  addToCart(product:[]){
    this.cartItemList.push(...product)
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
  }

  getTotalPrice(){
    let grandTotal =0;
    this.cartItemList.map((a:any)=>{
      grandTotal =+ a.total;
    })
  }

  removeCartItem(product:any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id===a.id){
        this.cartItemList.splice(index,1)
      }
    })
  }

  emptyCard(){
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }
}
