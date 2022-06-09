import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: {name: string, description:string, category:string, price:number}[]=[]


  addProduct(name: string, description:string, category:string, price:number){
    this.products.push({name, description, category, price})
  }

  getProducts(){
    return this.products
  }

  getProduct(i:number){
    return this.products[i]
  }
  updateProduct(i:number, newname: string, newdescription:string, newcategory:string, newprice:number){
    const product = this.getProduct(i)
    product.name=newname;
    product.description=newdescription;
    product.category=newcategory;
    product.price=newprice;
    return product
  }
  deleteProduct(i:number){
    this.products.splice(i,1)
  }
  constructor() { }
}
