import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TreeNode } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('assets/products_list.json');
       
    }

    
    getFilesystem() {
      return this.http.get<any>('assets/product_data.json')
        .toPromise()
        .then(res => <TreeNode[]>res.data);
      }
}
