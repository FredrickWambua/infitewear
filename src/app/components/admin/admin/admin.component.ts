import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public productList: Product[] =[]
  p: number = 1;
  id: any;
  data: any



  constructor( private productService:ProductsService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data=>{
      this.productList = data;
      console.log(data);
    })
  }

  editProduct(){
    this.productService.updateProduct(this.id, this.data).subscribe(
      data=>{
        console.log(data)
      }
    )

  }

  deleteProduct(){
    this.productService.deleteProduct(this.id).subscribe(data=>{
      console.log(data);
      
    })
  }

}
