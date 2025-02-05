import { CurrencyPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RatingToStarsPipe } from '../rating-to-stars.pipe.spec';
import { Router, RouterLink } from '@angular/router';
import { CartServiceService } from '../services/cart-service.service';
import { ProductServiceService } from '../services/product-service.service';


@Component({
  selector: 'app-product-card',
  imports: [CurrencyPipe , RatingToStarsPipe,RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  products:any
  
  @Input() productItem: any;
  @Output() sendToParent = new EventEmitter<number>();
  // deleteHandle(id: number){
  //   console.log("CHILD",id);
  //   // EventEmitter sends the value (id) to parent (list of products)
  //   this.sendToParent.emit(id);
    
  // }
  // Navigate to the product details page
  constructor(private router: Router,private cartService:CartServiceService,private productService:ProductServiceService){

  }
  ngOninit(){
    this.productService.getProducts().subscribe((response)=>this.products=response.products)
  }
  addToCart(product: any){
    this.cartService.addToCart(product);
  }
  viewProduct(id:number){
    this.router.navigate(['/product-details',id]);
    
  }
}
