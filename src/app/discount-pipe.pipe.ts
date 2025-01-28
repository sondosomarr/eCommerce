import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discountPipe'
})
export class DiscountPipePipe implements PipeTransform {

  transform(price: number, discount: number ): number {
   const priceAfterDiscount= price-(price*discount)/100
    return +priceAfterDiscount.toFixed(2);
  }

}
