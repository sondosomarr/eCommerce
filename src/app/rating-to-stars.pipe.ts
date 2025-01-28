import {Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ratingToStars'
})

export class RatingToStarsPipe implements PipeTransform {
  transform(rating: number , maxStars:number=5): string {
    let stars=''
    // const halfStar =( rating % 1 >= 0.5)? '' :'1/2'
    for(let i=0; i<maxStars;i++){//5
      if(i<rating){
        stars+=`<i class="fa-solid fa-star"></i>`
      }else{
      stars += `<i class="fa-regular fa-star"></i>`
      }
    }
    return stars;
  }
}

