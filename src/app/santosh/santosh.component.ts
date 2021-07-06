import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'santosh',
  templateUrl: './santosh.component.html',
  styleUrls: ['./santosh.component.css']
})
export class SantoshComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  customer={
    name:'santosh',
    age:20,
    truth: true,
    array: [10, 20, 30, 40],
    numAndString:  [1, 'santosh'],
    allType: true
   }
}
