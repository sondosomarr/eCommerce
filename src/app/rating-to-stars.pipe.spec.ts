import {Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ratingToStars'
})

export class RatingToStarsPipe implements PipeTransform {
  transform(rating: number): string {
    const fullStars='⭐'.repeat(Math.floor(rating))
    // const halfStar =( rating % 1 >= 0.5)? '' :'1/2'
    const emptyStars='☆'.repeat(5 - Math.ceil(rating))
    return `${fullStars}  ${emptyStars}`
  }
}
