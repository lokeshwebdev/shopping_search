import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']

})
export class InfoComponent implements OnInit {
  productList:any=[];
  test="tses";
  products: Product[]=[];
productImg="";
 // allProductList:any=[];

 customers: any=[]=[];

    first = 0;
    rows = 5;

    displayModal: boolean=false;



  constructor(private _productData:ProductService) { 



  }

  showModalDialog(imgval:any) {
    this.displayModal = true;

    this.productImg=imgval.src;
}

  ngOnInit(): void {
  
    this._productData.getData().subscribe(customers =>{
       this.customers = customers; 
     console.log(this.customers)
       });

    //this._productData.getData().subscribe(data => this.productList = data);

   this._productData.getData().subscribe((data:any)=>{   
      
        this.products = data; 
    console.log(this.productList);
      
      }) 


  }

  next() {
    this.first = this.first + this.rows;
    

} 

prev() {
    this.first = this.first - this.rows;
}

reset() {
    this.first = 0;
}

isLastPage(): boolean {

  console.log('scssdcc',this.customers.length);

    return this.customers ? this.first === (this.customers.length - this.rows): true;

    
}

isFirstPage(): boolean {
    return this.customers ? this.first === 0 : true;
}


}
