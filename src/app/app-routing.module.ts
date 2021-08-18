import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AllproductsComponent} from './allproducts/allproducts.component';
import {AboutComponent} from './about/about.component';
import{ProductDetailComponent} from './product-detail/product-detail.component';
import { InfoComponent } from './info/info.component';
import { ServiceComponent } from './service/service.component';
import { OurworkComponent } from './ourwork/ourwork.component';


const routes: Routes = [

  {  path:'', component:AllproductsComponent},
  {  path:'product', component:AllproductsComponent},
{  path:'about', component:AboutComponent},
{  path:'product-detail/:id', component:ProductDetailComponent},
{  path:'info', component:InfoComponent},
{  path:'service', component:ServiceComponent},
{  path:'our-work', component:OurworkComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
