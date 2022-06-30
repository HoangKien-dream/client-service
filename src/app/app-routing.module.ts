import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsListComponent} from './components/products-list/products-list.component';
import {ProductDetailComponent} from './components/product-detail/product-detail.component';
import {CartComponent} from './components/cart/cart.component';
import {CheckOutComponent} from './components/check-out/check-out.component';
import {OrdersListComponent} from './components/orders-list/orders-list.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {OrderDetailComponent} from './components/order-detail/order-detail.component';
import {ProfileComponent} from './components/profile/profile.component';
import {ListAccountComponent} from './components/admin/list-account/list-account.component';
import {ListRoleComponent} from './components/admin/list-role/list-role.component';
import {CreateProductComponent} from './components/admin/create-product/create-product.component';


const routes: Routes = [
  {path:'', redirectTo:'products',pathMatch:'full'},
  {path:'products', component:ProductsListComponent},
  {path:'products/:id', component:ProductDetailComponent},
  {path:'cart', component:CartComponent},
  {path:'check-out', component:CheckOutComponent},
  {path:'orders', component:OrdersListComponent},
  {path:'orders/:id',component:OrderDetailComponent},
  {path:'profile', component:ProfileComponent},
  {path:'list-account',component:ListAccountComponent},
  {path:'list-role',component:ListRoleComponent},
  {path:'create-product', component:CreateProductComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
