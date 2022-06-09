import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

productForm!: FormGroup;
categories: string[]=['Men Clothing', 'Ladies Clothing', 'Baby Wear', 'Sneakers']


  constructor(public formBuilder:FormBuilder, private productService:ProductsService) { }
    get pf(){
      return this.productForm.controls;
      
    }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      name: ['',[Validators.required, Validators.minLength(3)]],
      image: ['',[Validators.required]],
      imgSrc: ['',],
      description: ['',[Validators.required, Validators.minLength(20)]],
      category: [''],
      price: ['',[Validators.required, Validators.minLength(3)]],
    })
  }
  imageFile!: string;

  onImageChange(e:any){
    const reader = new FileReader();
    if(e.targe.files){
      const image= e.target.files;
      reader.readAsDataURL(image);

      reader.onload =()=>{
        this.imageFile = reader.result as string;
      }
    }
  }

  addProduct(){
    this.productService.addProduct({...this.productForm.value, image: this.imageFile})
  }

}
