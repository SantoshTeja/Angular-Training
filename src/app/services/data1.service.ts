import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Data1Service {

  customers:any=[];

  // private behaviorSubj  = new BehaviorSubject<any[]>(this.customers);
  private behaviorSubj = new BehaviorSubject(this.customers)
   currentMsg = this.behaviorSubj.asObservable()
   changeData(data:any){
 
     console.log(data)
     this.behaviorSubj.value.push(data)
   }
}
