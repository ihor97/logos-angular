import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IDiscount } from 'src/app/shared/interfaces/discount.interface';
import { DiscountService } from 'src/app/shared/services/discount.service';

@Component({
  selector: 'app-discount-detail',
  templateUrl: './discount-detail.component.html',
  styleUrls: ['./discount-detail.component.scss']
})
export class DiscountDetailComponent implements OnInit {
  discount:IDiscount
  constructor(private actRoute:ActivatedRoute,private discountSrv:DiscountService,private router:Router) { }

  ngOnInit(): void {
  
   this.actRoute.data.subscribe(
    (data)=>{
      this.discount=data.discount
    }
   )
 
  }

  goBack(){
    this.router.navigate(['../'],{relativeTo:this.actRoute})
  }

}
