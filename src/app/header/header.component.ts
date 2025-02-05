import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Product } from '../types/product';
import { CartServiceService } from '../services/cart-service.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
cartProducts: Product[]=[]
count=0
constructor(private addToCart:CartServiceService){}

ngOnInit() {
  this.addToCart.getCart().subscribe({
    next: (response) => {
      this.cartProducts=response
      console.log(this.cartProducts);
      
    }
  })
}
}
