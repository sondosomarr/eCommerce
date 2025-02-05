import { CartServiceService } from './../services/cart-service.service';

import { Component, OnInit } from '@angular/core';
// import * as products from '../../assets/products.json';
import { FormsModule } from '@angular/forms';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../types/product';
import { ProductServiceService } from '../services/product-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  imports: [FormsModule, ProductCardComponent,CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent implements OnInit {
  products: any[]=[];
  constructor(private productService:ProductServiceService, private cartService:CartServiceService ){}

  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: (response: any) => {
        this.products = response.products;
      },
      error: (err) => {
        console.error('Error fetching products:', err);
        // Handle error (show message, etc.)
      }
    });
  }

addToCart(product:any){
this.cartService.addToCart(product)
}
  // deleteProduct(id : number){
  //  console.log("Parent",id);
  // this.products= this.products.filter((product)=>product.id !==id)
  // }
}
