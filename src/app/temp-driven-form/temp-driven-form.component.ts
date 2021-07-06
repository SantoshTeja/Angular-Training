import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-driven-form',
  templateUrl: './temp-driven-form.component.html',
  styleUrls: ['./temp-driven-form.component.css']
})
export class TempDrivenFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
submitData(value:any){
    console.log(value)
  }
}
