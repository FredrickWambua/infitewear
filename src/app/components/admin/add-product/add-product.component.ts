import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

productForm!: FormGroup;
categories: string[]=['Men Clothing', 'Ladies Clothing', 'Baby Wear', 'Sneakers']
imageFile!: File



  constructor(public formBuilder:FormBuilder, private productService:ProductsService) { }
    get pf(){
      return this.productForm.controls;
      
    }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      name: ['',[Validators.required, Validators.minLength(3)]],
      image: ['',[Validators.required]],
      description: ['',[Validators.required, Validators.minLength(4)]],
      category: [''],
      price: ['',[Validators.required, Validators.minLength(3)]],
    })
  }

  onImageChange(event:any){
    this.imageFile = event.target.files[0];
  }

  addProduct(){
    this.productService.addProduct(this.productForm.value).subscribe(()=>{
      console.log('this is successfuly connected')
    },(err)=>{
      console.log(err);   
    }) 
  }

}
