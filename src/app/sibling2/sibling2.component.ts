import { Component, OnInit } from '@angular/core';
import { Data1Service } from '../services/data1.service';

@Component({
  selector: 'app-sibling2',
  templateUrl: './sibling2.component.html',
  styleUrls: ['./sibling2.component.css']
})
export class Sibling2Component implements OnInit {

  customerss:any=[]
  customerss1:any=[
    {"empId":104,"empName":"roman","salary":100000},
    {"empId":105,"empName":"john","salary":200000},
    {"empId":106,"empName":"cena","salary":50000}
  ]

  constructor(private dataService:Data1Service) {
    dataService.currentMsg.subscribe(successMsg => this.customerss = successMsg)
  }
  ngOnInit(): void {  }
  modifiedData(){


     // this.customerss.push( {"empId":104,"empName":"roman","salary":100000})
     // this.customerss.push( {"empId":105,"empName":"john","salary":200000})
      //this.customerss.push( {"empId":106,"empName":"cena","salary":50000})


     for(var i=0;i<this.customerss1.length;i++){
    this.dataService.changeData(this.customerss1[i])
     }
  }
}
