import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }
  getResult(number1:any,number2:any,number3:any,value:any)
  {
    var value1=(Number)(number1)
    var value2=(Number)(number2)
    if(value=='+')
    {
      number3=value1+value2
    return number3
    }
    
    else if(value=='-'){
    number3=value1-value2
    return number3
    }
    else if(value=='*')
    {
    number3=value1*value2
    return number3
    }
    else 
    number3=value1/value2
    return number3
  }
}

