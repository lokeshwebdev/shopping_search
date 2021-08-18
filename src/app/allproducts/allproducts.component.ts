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
   emptyProductList1=[1,1,1,1,1,1,1,1,1,1,1,1];
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
  
   loadingProduct='';
   openoption: any;
   cities:any[]=[]
   selectedCity1:any={};
   showval:boolean= false;
     

    constructor(private _productlist:ProductsService) {    
     this.stateOptions = [{label: 'Open with New Tab', value: 'off'},{label: 'Open with Pop up', value: 'on'} ];     

     this.cities = [
      {name: 'open with new tab', value: 'off'},
      {name: 'opne with new popup', value: 'on'}
   
      
  ];
  
       this._productlist.getData().subscribe((data:any)=>{        
       
       setTimeout(()=>{  this.emptyProductList1 = [];  this.allProductList = data.data;   },3000)      
       
       /*
       this.category=this.allProductList.map((item:any) => item.category)
      .filter((value:any, index:any, self:any) => self.indexOf(value) === index);
       this.category.forEach(function(value){  });    
      var lab =this.category;
      var val = this.category;
       for(var i=0; i<this.category.length; i++)  {
        this.cities.push({name: lab[i], val: val[i]});      }   
    */
   
    }); }
    
    
 
   ngOnInit(): void {  }

  //search Product by title 
  searchproduct=(producttitle:any)=>{ 
    
    this.showval=true;
    this.loadingProduct='';
    this.notFound='';
    this.allProductList=[];
  //  this.loadingProduct="https://mir-s3-cdn-cf.behance.net/project_modules/disp/35771931234507.564a1d2403b3a.gif";
    this.emptyProductList1=[1,1,1,1,1,1,1,1,1,1,1,1];
    setTimeout(()=>{
      this.emptyProductList1=[];
      this.notFound='';
    this._productlist.getData().subscribe((data:any)=>{ 
    this.allProductList= data.data;    
    this.allProductList=this.allProductList.filter((res:any) =>res.name.toLocaleLowerCase().match(producttitle.value.trim().toLocaleLowerCase()));
    this.loadingProduct=''
    if(this.allProductList.length==0) {
      this.loadingProduct=''
     this.notFound='Product not found';
   
    }
   
    });  },1000) 
    
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



 setvisibility=()=>
{
 
  if(this.openoption=='off') {
    this.rlink = true; }
    else{  this.rlink = false;   }  

}
 
selectOpenOption(ids:any)
{
   
  console.log(this.selectedCity1['name']);

 if(ids.value.value=='off') {
  this.rlink = true; }
  else{  this.rlink = false;   }  
 
}

clearText(iv:any) {
  this.showval=false;
  iv.value='';
  this.notFound='';
  this._productlist.getData().subscribe(data=>{    
       
      this.allProductList = data;   }      
    
     
 );
}

}