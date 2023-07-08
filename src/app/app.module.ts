import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
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

import { ModalModule } from 'ngx-bootstrap/modal';
import { ToggleCollapseDirective } from './shared/directives/toggle-collapse.directive';
import {HttpClientModule} from '@angular/common/http';
import { DiscountDetailComponent } from './pages/discount-detail/discount-detail.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PizzaComponent,
    SaladComponent,
    DrinksComponent,
    PaymentComponent,
    BasketComponent,
    DiscountsComponent,
    AdminComponent,
    AdminCategoryComponent,
    AdminProductComponent,
    AdminDiscountComponent,
    AdminOrdersComponent,
    ToggleCollapseDirective,
    DiscountDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ModalModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
