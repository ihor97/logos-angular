import { Component, OnInit } from '@angular/core';
import { DiscountService } from '../../shared/services/discount.service';
import { IDiscount } from 'src/app/shared/interfaces/discount.interface';


@Component({
  selector: 'app-discounts',
  templateUrl: './discounts.component.html',
  styleUrls: ['./discounts.component.scss']
})
export class DiscountsComponent implements OnInit {
  userDiscounts: Array<IDiscount> = [];
  constructor(private discountService: DiscountService) { }

  ngOnInit(): void {
    this.getUserDiscounts()
  }

  getUserDiscounts(){
    this.discountService.getDiscounts().subscribe(data=>{
      this.userDiscounts=data
    })
  }


}
