import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http:HttpClient) { }
  getProducts():Observable<any>{
    return this.http.get('https://dummyjson.com/products')
  }
  getProductById(id:number){
    return this.http.get(`https://dummyjson.com/products/${id}`)
  }
}
