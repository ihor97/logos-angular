import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PizzaComponent } from './pages/pizza/pizza.component';
import { SaladComponent } from './pages/salad/salad.component';
import { DrinksComponent } from './pages/drinks/drinks.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { BasketComponent } from './pages/basket/basket.component';
import { DiscountsComponent } from './pages/discounts/discounts.component';
import { AdminComponent } from './admin/admin.component';
import { AdminCategoryComponent } from './admin/admin-category/admin-category.component';
import { AdminProductComponent } from './admin/admin-product/admin-product.component';
import { AdminDiscountComponent } from './admin/admin-discount/admin-discount.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { DiscountDetailComponent } from './pages/discount-detail/discount-detail.component';
import{ DiscountResolver} from './pages/discount-detail/discountsDetail.resolver'

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'pizza', component: PizzaComponent },
  { path: 'salad', component: SaladComponent },
  { path: 'drinks', component: DrinksComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'basket', component: BasketComponent },
  { path: 'discounts', component: DiscountsComponent },
  { path: 'discounts/:id', component: DiscountDetailComponent ,resolve:{discount:DiscountResolver}},
  { path: 'admin', component: AdminComponent, children: [
    { path: '', redirectTo: 'category', pathMatch: 'full' },
    { path: 'category', component: AdminCategoryComponent },
    { path: 'product', component: AdminProductComponent },
    { path: 'discount', component: AdminDiscountComponent },
    { path: 'orders', component: AdminOrdersComponent },
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[]
})
export class AppRoutingModule { }
