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


  constructor(public formBuilder:FormBuilder,
     private productService:ProductsService,
     private http:HttpClient) { }
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
    const files = event.target.files;
    if(files){
      const formData= new FormData();
      formData.append('image', files[0]);
      this.http.post<{url: string}>('https://api.cloudinary.com/v1_1/dvoijod1b/image/upload', formData).subscribe(
        (data)=>{
          console.log(data.url)
        },
        error =>{
          console.log({error});
        }
      )
    }
  }

  addProduct(){
    this.productService.addProduct(this.productForm.value).subscribe(()=>{
    },(err)=>{
      console.log(err);   
    }) 
  }

}
