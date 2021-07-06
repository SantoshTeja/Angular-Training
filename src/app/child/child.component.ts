import { EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  constructor() { }

  @Input() cuname:string=' ';

  @Output() notify:EventEmitter<string> = new EventEmitter<string>();
  sendDataFromChildToParent(){
    this.notify.emit('Child Data sending from Child Component')
  }


}
