import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { OrdersListComponent } from './components/orders-list/orders-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzMessageModule } from 'ng-zorro-antd/message';
import {NzModalModule} from "ng-zorro-antd/modal";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzDatePickerModule} from "ng-zorro-antd/date-picker";
import {NzDropDownModule} from "ng-zorro-antd/dropdown";

import { ProfileComponent } from './components/profile/profile.component';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';
import { ListAccountComponent } from './components/list-account/list-account.component';
import { ListRoleComponent } from './components/list-role/list-role.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {NzRadioModule} from "ng-zorro-antd/radio";
import {NzSelectModule} from "ng-zorro-antd/select";

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    OrdersListComponent,
    ProductDetailComponent,
    CartComponent,
    CheckOutComponent,
    ProfileComponent,
    OrderDetailComponent,
    ListAccountComponent,
    ListRoleComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NzPaginationModule,
    BrowserAnimationsModule,
    NzMessageModule,
    NzModalModule,
    NzInputModule,
    NzDatePickerModule,
    NzDropDownModule,
    NzSelectModule,
    NzRadioModule,
    NzSelectModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
