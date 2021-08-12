import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
 
  productdetail:any=[];

  constructor(private router:ActivatedRoute, private _productdetail:ProductsService) { 
 
  }
  singleProductTitle='';
  singleProductImg='';
  singleProductDes='';
  singleProductCategory='';
  singleProductQuantity='';
  singleProductInventoryStatus='';
  singleProductPrice="";
    ngOnInit(): void { 
    this._productdetail.getData().subscribe(data=>{   
      this.productdetail=data;
      this.productdetail =this.productdetail.filter((res:any) =>{return res.id==this.router.snapshot.params.id});      
   
     
      this.singleProductTitle=this.productdetail[0].name;
      this.singleProductImg=this.productdetail[0].image;
      this.singleProductPrice=this.productdetail[0].price;
      this.singleProductDes=this.productdetail[0].description; 
      this.singleProductCategory=this.productdetail[0].category;
      this.singleProductQuantity=this.productdetail[0].quantity;  
      this.singleProductInventoryStatus=this.productdetail[0].inventoryStatus;
    
    })     
  }

  
   
  

}
