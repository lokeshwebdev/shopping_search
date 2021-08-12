import { Component, OnInit } from '@angular/core';
 
import { ProductService } from '../product.service';
 
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  files1:any[]= [];

  files2:any[]= [];

  cols: any=[];
  constructor(private _productlist:ProductService) {    }

  ngOnInit() {


    

    this._productlist.getFilesystem().then((files:any) => this.files1 = files);
    this._productlist.getFilesystem().then((files:any) => this.files2 = files);
    
     // console.log(this.files1['data']);   
      
      
    
    this.cols = [
        { field: 'name', header: 'Name' },
        { field: 'price', header: 'Price' },
        { field: 'availability', header: 'Availability' }
    ];
  }

}
