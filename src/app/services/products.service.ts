import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: {name: string, image:string, description:string, category:string, price:number}[]=[]


  addProduct(data:any){
    this.products.push(data)
  }

  getProducts(){
    return this.products
  }

  getProduct(i:number){
    return this.products[i]
  }
  updateProduct(i:number, newname: string, newfileUpload:File, newdescription:string, newcategory:string, newprice:number){
    const product = this.getProduct(i)
    product.name=newname;
    product.image;
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
