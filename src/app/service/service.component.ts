import { Component, OnInit } from '@angular/core';
 
import { ProductService } from '../product.service';
 
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  foodData:any[]=[];
 // files2:any[]= [];
  cols: any=[];
  groupedFood:any=[];
  selectedFood: any=[];

  constructor(private _productlist:ProductService) {    }

  
  ngOnInit() {

   
    this.cols = [
        { field: 'name', header: 'name' },
        { field: 'price', header: 'price' },
        { field: 'availability', header: 'availability' }
    ];


 this.groupedFood = [
 {
 name: 'Breakfast', value: 'Breakfast',
     items: [
          {name: 'Poha', price:"$ 20", availability:"In Stock", cat_name: 'Breakfast'},
          { "name":"Oats chilla", "price":"$ 22",  "availability":"Out of stock", cat_name: 'Breakfast'},
          { "name":"Upma recipe (rava upma)",  "price":"$ 19", "availability":"In Stock", cat_name: 'Breakfast'},
          { "name":"Palak paratha (Spinach paratha)", "price":"$ 10", "availability":"In Stock", cat_name: 'Breakfast' },
          { "name":"Methi paratha (methi roti)", "price":"$ 25","availability":"In Stock", cat_name: 'Breakfast'},
          {  "name":"Paniyaram ", "price":"$ 17", "availability":"Out of stock", cat_name: 'Breakfast' },
          { "name":"Paneer paratha", "price":"$ 17", "availability":"Out of stock" , cat_name: 'Breakfast'}
            ] 
 },
 {
 name: 'Lunch', value: 'Lunch', 
      items: [ 
          { "name":"Dal paratha",  "price":"$ 20",   "availability":"In Stock" , cat_name: 'Lunch'},
          {  "name":"Oats idli", "price":"$ 33", "availability":"In Stock", cat_name: 'Lunch'},
          {  "name":"Daal Roti Rice",  "price":"$ 21", "availability":"Out of stock", cat_name: 'Lunch'},
          {  "name":"Methi pulao recipe",  "price":"$ 26",     "availability":"In Stock", cat_name: 'Lunch'},
          {    "name":" Jeera rice ",  "price":"$ 12",  "availability":"In Stock ", cat_name: 'Lunch'},
          {  "name":"Veg Wraps",  "price":"$ 15", "availability":"Out of stock"  , cat_name: 'Lunch'},
          {   "name":"Aloo matar roti",  "price":"$ 15",  "availability":"Out of stock"  , cat_name: 'Lunch'}
                
            ]
     },
 {   
 name: 'Dinner', value: 'Dinner', 
        items:[{"name":"Dal paratha", "price":"$ 20", "availability":"In Stock",cat_name:'Dinner'},
          {"name":"Oats idli", "price":"$ 33", "availability":"In Stock",cat_name:'Dinner' },
          {"name":"Daal Roti Rice", "price":"$ 21", "availability":"Out of stock",cat_name:'Dinner'},
          {"name":"Methi pulao recipe","price":"$ 26","availability":"In Stock" ,cat_name:'Dinner'}, 
          {"name":" Jeera rice ", "price":"$ 12","availability":"In Stock " ,cat_name:'Dinner'},
          { "name":"Veg Wraps", "price":"$ 15","availability":"Out of stock" ,cat_name:'Dinner'},    
          {"name":"Aloo matar roti", "price":"$ 15", "availability":"Out of stock",cat_name:'Dinner'}]
 },
  {   
 name: 'Fruits', value: 'Fruits', 
       items:[  
		        { "name":"Apples",  "price":"$ 3", "availability":"In Stock",cat_name:'Fruits'},                 
            { "name":"Papaya",  "price":"$ 2", "availability":"Out of stock",cat_name:'Fruits'},
            { "name":"Bananas", "price":"$ 1", "availability":"In Stock",cat_name:'Fruits'},
             { "name":"Guava",  "price":"$ 3",  "availability":"In Stock" ,cat_name:'Fruits'},
             {  "name":"Water Melons",  "price":"$ 1",   "availability":"Out of stock",cat_name:'Fruits'},
              {  "name":"Oranges",   "price":"$ 2",  "availability":"In Stock" ,cat_name:'Fruits'},   
             {  "name":"Lichi",  "price":"$ 3",  "availability":"In Stock"  ,cat_name:'Fruits'}
 
            ]
      },
 {
name: 'Vegetables', value: 'Vegetables', 
   items:[
        { "name":"Potato", "price":"$ 1", "availability":"In Stock",cat_name:'Vegetables'}, 
        { "name":"Tomato", "price":"$ 2", "availability":"Out of stock",cat_name:'Vegetables' }, 
        {"name":"Capsicum", "price":"$ .5",  "availability":"In Stock" ,cat_name:'Vegetables'},
        { "name":"Cabbage",  "price":"$ 3",  "availability":"In Stock",cat_name:'Vegetables'},
        { "name":"Broccoli",  "price":"$ 5",  "availability":"In Stock",cat_name:'Vegetables'},
        {  "name":"Carrot", "price":"$ 6",  "availability":"Out of stock",cat_name:'Vegetables'}, 
        { "name":" brinjal",  "price":"$ 4",  "availability":"In Stock",cat_name:'Vegetables' }
 ]
 },
 { 
    name: 'Drink', value: 'Drink', 
   items:[  
       { "name":"Wine", "price":"$ 2",   "availability":"Out of stock" ,cat_name:'Drink'},					
      { "name":"Coffee",   "price":"$ 2",    "availability":"In Stock" ,cat_name:'Drink' },					
      { "name":"Lemonade", "price":"$ 3", "availability":"In Stock" ,cat_name:'Drink' },					
      { "name":"Iced tea",   "price":"$ 5",   "availability":"In Stock"  ,cat_name:'Drink'},
      { "name":"Hot chocolate",   "price":"$ 11",   "availability":"Out of stock"   ,cat_name:'Drink' },
     { "name":"Juice", "price":"$ 10",  "availability":"In Stock"  ,cat_name:'Drink'},
     { "name":" Milkshake", "price":"$ 22", "availability":"In Stock"  ,cat_name:'Drink'}
     ]
 } 
      
  ];


  

  }

 
  addDataTable(newval:any) {
 
this.foodData=[]; 
let temp_obj :any= [];

for(let i=0; i<this.selectedFood.length; i++) {

  /*   check  foodData is 0   then add food category with child    */  

 if(temp_obj.length==0) {

  temp_obj= {
  data:{"name":this.selectedFood[i].cat_name, "price":" ", "availability":" "},
  children:[] } 
 
let temp_obj_child={data:{name:this.selectedFood[i].name, price:this.selectedFood[i].price, availability:this.selectedFood[i].availability}}

temp_obj.children.push(temp_obj_child); 
this.foodData.push(temp_obj); }



 /*   check food category  in foodData  then merge child     */   

  else  if((this.foodData.filter((res:any)=>{return res.data.name==this.selectedFood[i].cat_name})).length>0  ) 
  {
   
   let temp_obj_child={data:{name:this.selectedFood[i].name, price:this.selectedFood[i].price, availability:this.selectedFood[i].availability}} 

   let catName =this.selectedFood[i].cat_name;
   let objIndex=this.foodData.findIndex(getObjIndex, catName);
   function getObjIndex(age:any) {     
    return age.data.name == catName;   } 

   this.foodData[objIndex].children.push(temp_obj_child)    } 

   /*   check food category not  in foodData  then add  food category with child     */   

  else {
  temp_obj= {
   data:{ "name":this.selectedFood[i].cat_name, "price":" ", "availability":" " },
   children:[] } 
         
let temp_obj_child={data:{name:this.selectedFood[i].name, price:this.selectedFood[i].price, availability:this.selectedFood[i].availability}}
        
 temp_obj.children.push(temp_obj_child);
 this.foodData.push(temp_obj);

       }   

      } //end loop


} // end addDataTable function
 

}
