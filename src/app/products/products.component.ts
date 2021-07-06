import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../services/productservice.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent{
  filteredString:string=''; 
  sortby:any='1'
  
  products:any;
  // constructor(private productServices:ProductserviceService)
  // {
  //   this.products=productServices.getallproducts();
  // }

  errMsg:any;
  constructor(proService:ProductserviceService){
    proService.getallproducts().subscribe(
      result => this.products = result,
      error => this.errMsg = error
    )
}
}
