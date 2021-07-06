import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdvwebService {

  url:string = 'assets/advweb.json'; //local
  //url:string = ''; //network RESTful
  constructor(private httpClient:HttpClient) { }
  getalladvwebcourse(){
     return this.httpClient.get(this.url)
}
}
