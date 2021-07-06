import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../services/calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  number1:number=0;
  number2:number = 0;
  number3:any;

  // getResult(value:any)
  // {
  //   var value1=(Number)(this.number1)
  //   var value2=(Number)(this.number2)
  //   if(value=='+')
  //   this.number3=value1+value2
  //   else if(value=='-')
  //   this.number3=value1-value2
  //   else if(value=='*')
  //   this.number3=value1*value2
  //   else 
  //   this.number3=value1/value2
  // }

  constructor(private calculatorService:CalculatorService)
  {
    
  }
  operation(value:any)
  {
    var value1=(Number)(this.number1)
    var value2=(Number)(this.number2)
    var value3=(Number)(this.number3)
    this.number3=this.calculatorService.getResult(value1,value2,value3,value)
  }

}
