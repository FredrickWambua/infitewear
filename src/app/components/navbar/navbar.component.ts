import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public totalItems : number = 0;

  search = ''
  constructor( private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res =>{
      this.totalItems = res.length;
    })
  }


}
