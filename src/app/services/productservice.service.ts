import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// interface Product
// {
//   productId:number,
//   productName:String,
//   productPrice:number,
//   productDes:String,
//   productImg:String,
// }
@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {


  // products:Product[]=[
  //   {productId:101, productName:'football',productPrice:20000,productDes:'the product is football ',productImg:'assets/football.jpg'},
  //   {productId:102, productName:'cricket',productPrice:30000,productDes:'the product is cricket bat ',productImg:'assets/cricket.jpg'},
  //   {productId:103, productName:'basketball',productPrice:15000,productDes:'the product is basketball',productImg:'assets/basketball.jpg'}

  // ]
  // getallproducts():any{
  //   return this.products;
  // }
  url:string = 'assets/products.json'; //local
  //url:string = ''; //network RESTful
  constructor(private httpClient:HttpClient) { }
  getallproducts(){
     return this.httpClient.get(this.url)
  }
}
