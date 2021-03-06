import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public products  : any = [];
  public grandTotal ! : number ;
  public totalproducts! : number;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice()

    })
  }
  removeItem(product:any){
       this.cartService.removeCartItem(product)
  }
  emptyTheCart(){
    this.cartService.emptyCart();
  }
  
  decQnty(product:any){
    if(product.quantity > 1){
      product.quantity--
      product.total = product.quantity * product.price
      this.grandTotal = this.cartService.getTotalPrice()

    }
  }

  incQnty(product:any){
    product.quantity++
    product.total = product.quantity * product.price;
    this.grandTotal = this.cartService.getTotalPrice()

  }
  
  
}
