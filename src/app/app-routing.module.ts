import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/admin/add-product/add-product.component';
import { AdminComponent } from './components/admin/admin/admin.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {path: '', redirectTo: 'home',pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'products', loadChildren: ()=>import('./modules/products/products.module')
.then(mod=>mod.ProductsModule)},
  {path: 'admin', loadChildren: ()=>import('./modules/admin/admin.module')
.then(mod=>mod.AdminModule)},
  {path: 'login', loadChildren: ()=>import('./modules/login/login.module')
.then(mod=>mod.LoginModule)},
  {path: 'signup', loadChildren: ()=>import('./modules/signup/signup.module')
.then(mod=>mod.SignupModule)},
  {path: 'cart', loadChildren: ()=>import('./modules/cart/cart.module')
.then(mod=>mod.CartModule)},
  {path: '**', component: NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
