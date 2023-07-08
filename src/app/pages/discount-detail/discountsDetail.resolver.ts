import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { IDiscount } from "../../shared/interfaces/discount.interface"
import { DiscountService } from "../../shared/services/discount.service"
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";


@Injectable({ providedIn: 'root' })

export class DiscountResolver 
implements Resolve<IDiscount>
{
    
    constructor(private dSrv: DiscountService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IDiscount | Observable<IDiscount> | Promise<IDiscount> {

        return this.dSrv.getDiscount(+route.params['id'])
    }
}