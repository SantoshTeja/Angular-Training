import { Component, OnInit } from '@angular/core';
import { CorewebService } from '../services/coreweb.service';

@Component({
  selector: 'app-coreweb',
  templateUrl: './coreweb.component.html',
  styleUrls: ['./coreweb.component.css']
})
export class CorewebComponent {

  filteredString:string='';
  sortby:any='1';
  courses:any=[];
  errMsg:any;
  constructor(proService:CorewebService){
    proService.getallcorewebcourse().subscribe(
      result => this.courses = result,
      error => this.errMsg = error
    )
    }
}
