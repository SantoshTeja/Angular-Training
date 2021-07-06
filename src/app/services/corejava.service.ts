import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CorejavaService {

  url:string = 'assets/corejava.json'; //local
  //url:string = ''; //network RESTful
  constructor(private httpClient:HttpClient) { }
  getallcorejavacourse(){
     return this.httpClient.get(this.url)
}
}
