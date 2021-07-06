import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CorewebService {

  url:string = 'assets/coreweb.json'; //local
  //url:string = ''; //network RESTful
  constructor(private httpClient:HttpClient) { }
  getallcorewebcourse(){
     return this.httpClient.get(this.url)
}
}
