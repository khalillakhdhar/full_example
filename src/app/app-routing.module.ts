import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { LoginComponent } from './login/login.component';
import { E404Component } from './e404/e404.component';
import { CartComponent } from './cart/cart.component';
import { BlogsingleComponent } from './blogsingle/blogsingle.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProductComponent } from './product/product.component';
import { ShopComponent } from './shop/shop.component';


const routes: Routes = [
  { path:'',component: HomeComponent},
  { path:'home',component: HomeComponent},
  { path:'blog',component:BlogComponent},
  { path:'login',component:LoginComponent},
  { path:'e404',component:E404Component},
  { path:'blogsingle',component:BlogsingleComponent},
  { path:'cart',component:CartComponent},
  { path:'checkout',component:CheckoutComponent},
  { path:'contactus',component:ContactusComponent},
  { path:'product',component:ProductComponent},
  { path:'shop',component:ShopComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
