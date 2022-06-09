import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  // onSubmit(addProductForm:NgForm){
  //   console.log(addProductForm);
    
    
  // }

  constructor(private productService:ProductsService) { }

  ngOnInit(): void {
  }

  addProduct(name: string, description:string, category:string, price:number){
    this.productService.addProduct(name,description,category,price)
  }

}
