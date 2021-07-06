import { Component, OnInit } from '@angular/core';
import { AdvwebService } from '../services/advweb.service';

@Component({
  selector: 'app-advweb',
  templateUrl: './advweb.component.html',
  styleUrls: ['./advweb.component.css']
})
export class AdvwebComponent {

  filteredString:string='';
  sortby:any='1';
  courses:any=[];
  errMsg:any;
  constructor(proService:AdvwebService){
    proService.getalladvwebcourse().subscribe(
      result => this.courses = result,
      error => this.errMsg = error
    )
    }
}
