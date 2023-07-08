import { Injectable } from '@angular/core';
import { IDiscount } from '../interfaces/discount.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
// спільні дані для кількох компонентів методи наприклад
// надавати дані додатку
export class DiscountService {
  discounts:IDiscount[]
  url:string
  constructor(private _http:HttpClient) { 
    this.url='http://localhost:3000/discounts'
  }

  getDiscounts():Observable<Array<IDiscount>>{
    return this._http.get<Array<IDiscount>>(this.url)
  }
  getDiscount(id:number):Observable<IDiscount>{
    return this._http.get<IDiscount>(`${this.url}/${id}`)
  }

  postDiscounts(d:IDiscount):Observable<IDiscount>{
   return this._http.post<IDiscount>(this.url,d)
  }
  deleteDiscount(discount:IDiscount):Observable<IDiscount>{
    return this._http.delete<IDiscount>(`${this.url}/${discount.id}`)
  }
  updateDiscount(discount:IDiscount,id:number):Observable<IDiscount>{
    return this._http.patch<IDiscount>(`${this.url}/${id}`,discount)
  }
}
