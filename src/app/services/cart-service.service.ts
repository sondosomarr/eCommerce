// import { Product } from './../types/product';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../types/product';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
private cartProducts: Product[] = [];
private cartItems = new BehaviorSubject<Product[]>(this.cartProducts)

getCart():Observable<Product[]>{
  return this.cartItems.asObservable();
}
  addToCart(product: Product) {
    let currentItems=this.cartProducts.find((item)=>item.id===product.id);

    if(currentItems){
      currentItems.quantity=(currentItems.quantity||1) + 1
    }else{
      this.cartProducts.push({...product, quantity: 1})
    }
   this.cartItems.next([...this.cartProducts])
  }
  removeFromCart(productId: number) {
   this.cartProducts = this.cartProducts.filter((item)=>item.id !== productId)
   this.cartItems.next([...this.cartProducts])
    
  }
  updateQuantity(productId: number){
    let product = this.cartProducts.find((item)=>item.id===productId)
    if(product){
      if((product.quantity||1)<product.stock){
        product.quantity=(product.quantity||1)+1
        this.cartItems.next([...this.cartProducts])
      }
    }
  } 
  decreaseQuantity(productId: number){
    let product=this.cartProducts.find((item)=>item.id===productId)
    if(product&&product.quantity&&product.quantity>1){
      product.quantity=(product.quantity||1)-1
      
    }else{
      this.removeFromCart(productId)
    }
    this.cartItems.next([...this.cartProducts])
  }
  // calcTotal(): number{
  //   const items = this.cartItems.value
  //   const quantities = this.quantities.value
  //   return items.reduce(
  //     (total, item)=> total + item.price * (quantities[item.id]||0),0)
  // }
  constructor() { }
}
