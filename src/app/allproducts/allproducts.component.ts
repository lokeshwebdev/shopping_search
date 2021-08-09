import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})


 
   export class AllproductsComponent implements OnInit {
   stateOptions:any[]=[];
   value1: any = "off"; 
   displayProductModal: boolean= false;
   allProductList:any=[];
   notFound="";    
   singleProductTitle='';
   singleProductImg='';
   singleProductType='';
   soingleProductGlass='';
   singleProductIngredientse='';
   singleProductDes='';
   singleProductCategory='';
   singleProductQuantity='';
   singleProductInventoryStatus='';
   productPopupData:any=[];
   singleProductPrice='';
   rlink: boolean= true;
   category=[];


   cities:any[]=[]
   selectedCity1='';
    constructor(private _productlist:ProductsService) {    
     this.stateOptions = [{label: 'Open with New Tab', value: 'off'},{label: 'Open with Pop up', value: 'on'} ];     

       this._productlist.getData().subscribe(data=>{       
       this.allProductList = data;       
       this.category=this.allProductList.map((item:any) => item.category)
      .filter((value:any, index:any, self:any) => self.indexOf(value) === index);
       this.category.forEach(function(value){  });    
      var lab =this.category;
      var val = this.category;
       for(var i=0; i<this.category.length; i++)  {
        this.cities.push({name: lab[i], val: val[i]});      }   
  
    });     }    
 
   ngOnInit(): void {     }

  //search Product by title 
  searchproduct=(producttitle:any)=>{   
    this.notFound='';
     this._productlist.getData().subscribe(data=>{ 
     this.allProductList= data;    
     this.allProductList=this.allProductList.filter((res:any) =>res.name.toLocaleLowerCase().match(producttitle.value.trim().toLocaleLowerCase()));
     if(this.allProductList.length==0) {
      this.notFound='Product not found';

     }
    
     });  
  }  

//search Product by category
searchcategory=(productcategory:any)=>{   
  this._productlist.getData().subscribe(data=>{   
    this.allProductList = data;
      this.allProductList =this.allProductList.filter((res:any) =>{return res.category==productcategory}); 
    console.log(this.allProductList);

  })
   
}  

//product popup 
  productPopupModal=(id:any)=> {    
    let products:any=[];
    this._productlist.getData().subscribe(data=>{   
      this.productPopupData = data;
      products =this.productPopupData.filter((res:any) =>{return res.id==id.value});      
      this.singleProductTitle=products[0].name;
      this.singleProductImg=products[0].image;
         this.singleProductDes=products[0].description;  
      this.singleProductCategory=products[0].category;
      this.singleProductQuantity=products[0].quantity;  
      this.singleProductInventoryStatus=products[0].inventoryStatus; 
      this.singleProductPrice=products[0].price;  })     
     
    this.displayProductModal = true; 
  }

  

   openMode=()=> {  
     if(this.value1=='off') {
    this.rlink = true; }
    else{  this.rlink = false;   }  
             }

}
