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
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import { InfoComponent } from './info/info.component';
import {SkeletonModule} from 'primeng/skeleton';
import { ServiceComponent } from './service/service.component';
import {TreeTableModule} from 'primeng/treetable';
import {MultiSelectModule} from 'primeng/multiselect';
import {InputTextModule} from 'primeng/inputtext';
import {ContextMenuModule} from 'primeng/contextmenu';
import {ToastModule} from 'primeng/toast';
import { ContactComponent } from './contact/contact.component';
import { UXDesigningComponent } from './ux-designing/ux-designing.component';
import { OurworkComponent } from './ourwork/ourwork.component';
 

 
@NgModule({
  declarations: [
    AppComponent,
    AllproductsComponent,
    AboutComponent,
    HeaderComponent,
    ProductDetailComponent,
    InfoComponent,
    ServiceComponent,
    ContactComponent,
    UXDesigningComponent,
    OurworkComponent,
    
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
    DropdownModule,
    TableModule,
    SkeletonModule, 
    TreeTableModule,
    MultiSelectModule,
    InputTextModule,
    ContextMenuModule,
    ToastModule
  
    
    
 
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
