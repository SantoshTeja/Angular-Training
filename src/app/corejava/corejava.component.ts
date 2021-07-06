import { Component, OnInit } from '@angular/core';
import { CorejavaService } from '../services/corejava.service';

@Component({
  selector: 'app-corejava',
  templateUrl: './corejava.component.html',
  styleUrls: ['./corejava.component.css']
})
export class CorejavaComponent {

  filteredString:string='';
  sortby:any='1';
  courses:any=[];
  errMsg:any;
  constructor(proService:CorejavaService){
    proService.getallcorejavacourse().subscribe(
      result => this.courses = result,
      error => this.errMsg = error
    )
    }
}
