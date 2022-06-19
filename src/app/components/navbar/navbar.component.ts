import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public totalItems : number = 0;
  public searchQuery : string = "";

  // search = ''
  constructor( private cartService: CartService, private productService: ProductsService) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res =>{
      this.totalItems = res.length;
    })
  }
  search(event:any){
    this.searchQuery = (event.target as HTMLInputElement).value;
    this.productService.search.next(this.searchQuery)
    
  }

}
