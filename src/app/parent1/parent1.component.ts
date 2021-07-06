import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component {
  puname:any = 1000;
  countChange(value:any)
  {
    this.puname=value;
  }
}
