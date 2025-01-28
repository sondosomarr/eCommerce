import { Component, Input } from '@angular/core';
import * as products from '../../assets/products.json';
import { Product } from '../types/product';
import { DiscountPipePipe } from "../discount-pipe.pipe";
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
  ngOnInit(){
   const productId= +this.id
   console.log(productId);
   
    this.product= this.jsonData.find((product:Product) => product.id === productId)
    
    
  }
}
