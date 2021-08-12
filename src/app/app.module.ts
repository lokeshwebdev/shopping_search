import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

import {SelectButtonModule} from 'primeng/selectbutton';
import {CardModule} from 'primeng/card';
import {RadioButtonModule} from 'primeng/radiobutton';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {DropdownModule} from 'primeng/dropdown';
 

 

@NgModule({
  declarations: [
    AppComponent,
    AllproductsComponent,
    AboutComponent,
    HeaderComponent,
    ProductDetailComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ButtonModule,
    SelectButtonModule,
    CardModule,
    RadioButtonModule,
    DialogModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DropdownModule
    
 
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
