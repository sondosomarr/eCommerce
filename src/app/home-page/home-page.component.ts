import { Component, OnInit } from '@angular/core';
import * as products from '../../assets/products.json';
import { FormsModule } from '@angular/forms';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../types/product';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-home-page',
  imports: [FormsModule, ProductCardComponent,RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent implements OnInit {
  products:  Array<Product> = (products as any).products;
  ngOnInit(): void {
    console.log(this.products);
  }
  deleteProduct(id : number){
   console.log("Parent",id);
  this.products= this.products.filter((product)=>product.id !==id)
  }
}
