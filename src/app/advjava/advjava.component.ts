import { Component, OnInit } from '@angular/core';
import { AdvjavaService } from '../services/advjava.service';

@Component({
  selector: 'app-advjava',
  templateUrl: './advjava.component.html',
  styleUrls: ['./advjava.component.css']
})
export class AdvjavaComponent {

  filteredString:string='';
  sortby:any='1';
  courses:any=[];
  errMsg:any;
  constructor(proService:AdvjavaService){
    proService.getalladvjavacourse().subscribe(
      result => this.courses = result,
      error => this.errMsg = error
    )
    }

}
