import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component  {
  
@Input() cuname:any;
  @Output() changeCount:EventEmitter<any> = new EventEmitter<any>();
  mutualfund()
  {
     this.cuname++
     this.changeCount.emit(this.cuname);
    
  }
  stockmarket()
  {
   this.cuname--
   this.changeCount.emit(this.cuname);
  }

}
