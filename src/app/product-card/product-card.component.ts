import { CurrencyPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RatingToStarsPipe } from '../rating-to-stars.pipe.spec';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-product-card',
  imports: [CurrencyPipe , RatingToStarsPipe,RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() productItem: any;
  @Output() sendToParent = new EventEmitter<number>();
  // deleteHandle(id: number){
  //   console.log("CHILD",id);
  //   // EventEmitter sends the value (id) to parent (list of products)
  //   this.sendToParent.emit(id);
    
  // }
  // Navigate to the product details page
  constructor(private router: Router){

  }
  viewProduct(id:number){
    this.router.navigate(['/product-details',id]);
    
  }
}
