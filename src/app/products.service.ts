import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }
  messageAlert() {
 
    alert("Thanks for subscribe. We will get in touch with you sortly");

  }
  products = [

    
    {id:1,img:"https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg", title: "A1", glass:"Cocktail glass", type: "Alcoholic", des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.", ingredients: " Gin Grand Marnier Lemon Juice Grenadine"},
    {id:2,img:"https://www.thecocktaildb.com/images/media/drink/tqpvqp1472668328.jpg", title: "ABC", glass:"Shot glass", type: "Alcoholic", des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.", ingredients: " Gin Grand Marnier Lemon Juice Grenadine"},



   {id:3,img:"https://www.thecocktaildb.com/images/media/drink/l3cd7f1504818306.jpg", title: "Ace", glass:"Martini Glass", type: "Alcoholic", des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.", ingredients: " Gin Grand Marnier Lemon Juice Grenadine"},
   
   {id:4,img:"https://www.thecocktaildb.com/images/media/drink/v0at4i1582478473.jpg", title: "Adam", glass:"Cocktail glass", type: "Alcoholic", des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.", ingredients: " Gin Grand Marnier Lemon Juice Grenadine"},
   {id:5,img:"https://www.thecocktaildb.com/images/media/drink/rhhwmp1493067619.jpg", title: "AT&T", glass:"Highball Glass", type: "Alcoholic", des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.", ingredients: " Gin Grand Marnier Lemon Juice Grenadine"},
   {id:6,img:"https://www.thecocktaildb.com/images/media/drink/xuxpxt1479209317.jpg", title: "ACID", glass:"Shot glass", type: "Alcoholic", des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.", ingredients: " Gin Grand Marnier Lemon Juice Grenadine"},
   
   {id:7,img:"https://www.thecocktaildb.com/images/media/drink/l74qo91582480316.jpg", title: "A. J.", glass:"Cocktail glass", type: "Alcoholic", des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.", ingredients: " Gin Grand Marnier Lemon Juice Grenadine"},
   
   {id:8,img:"https://www.thecocktaildb.com/images/media/drink/808mxk1487602471.jpg", title: "Karsk", glass:"Highball glass", type: "Alcoholic", des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.", ingredients: " Gin Grand Marnier Lemon Juice Grenadine"},
   
   {id:9,img:"https://www.thecocktaildb.com/images/media/drink/xwtptq1441247579.jpg", title: "Melya", glass:"Coffee mug", type: "Non alcoholic", des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.", ingredients: " Gin Grand Marnier Lemon Juice Grenadine"}
        
   ];

   //products1='';
    products1:any[]=[];
   productDetail(id:any) {
   this.products1=this.products.filter(res =>res.id==id);
   return this.products1;
   //this.products1="hhhhhhhhh";
    //this.products1=this.products.filter(res =>res.title==id); 


   }


   getData() {
    return this.http.get('assets/productslist.json');
       
    }
    
    getData1()
    {
      let url ="https://jsonplaceholder.typicode.com/posts";
      return this.http.get(url);
  
    } 

}
