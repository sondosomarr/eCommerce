import { ProductServiceService } from './../services/product-service.service';
import { Component, Input } from '@angular/core';
import * as products from '../../assets/products.json';
import { Product } from '../types/product';
import { DiscountPipePipe } from "../discount-pipe.pipe";
import { ActivatedRoute } from '@angular/router';
import { CartServiceService } from '../services/cart-service.service';
@Component({
  selector: 'app-product-details',
  imports: [DiscountPipePipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  jsonData: Product[] = (products as any).default.products;
  product: Product | undefined;
  @Input() id : string=''
  constructor(private activateRoute:ActivatedRoute,private cartService:CartServiceService,private productService:ProductServiceService) { }
  ngOnInit(){
  //  const productId= +this.id
  //  console.log(productId);
  const productId= this.activateRoute.snapshot.params['id']
  this.productService.getProductById(productId).subscribe(
    (response:any)=> this.product=response
  )
    // this.product= this.jsonData.find((product:Product) => product.id === productId)
  }
addToCart(product:any){
  this.cartService.addToCart(product)
  alert('Product added to cart!')
}
}
