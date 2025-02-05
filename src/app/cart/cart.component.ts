import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { CartServiceService } from '../services/cart-service.service';
import { Product } from '../types/product';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartProducts: Product[] = [];
constructor(private cartService: CartServiceService){}
ngOnInit(){
  this.cartService.getCart().subscribe({
    next: (cart) => {
      this.cartProducts = cart;
    },
    error: (error) => {
      console.error(error);
    }
  
  });
}
update(id:number){
  this.cartService.updateQuantity(id);
}

decrease(id:number){
  this.cartService.decreaseQuantity(id);
}

remove(id:number){
  this.cartService.removeFromCart(id);
}
}
