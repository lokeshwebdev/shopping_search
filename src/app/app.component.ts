import { Component } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'searchproduct';

 

 //types: SelectItem[];
 types: any[];

 // selectedType: string;
 selectedType: any;

	selectedTypes: string[] = ['PayPal', 'MasterCard'];

	 //selectedModes: string[];
   selectedModes: any;

 ///	modes: SelectItem[];

    
	 

 


  constructor() {    
       

      this.types = [
        { label: 'Paypal', value: 'PayPal', icon: 'fa fa-fw fa-cc-paypal' },
        { label: 'Visa', value: 'Visa', icon: 'fa fa-fw fa-cc-visa' },
        { label: 'MasterCard', value: 'MasterCard', icon: 'fa fa-fw fa-cc-mastercard' }
      ];
  
       
  
       
    }
  
    
  }

  