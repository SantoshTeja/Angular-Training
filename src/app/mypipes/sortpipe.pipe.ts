import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortpipe'
})
export class SortpipePipe implements PipeTransform {

  transform(value:any,sort_args:any) {
    if(sort_args=='1')
    {
      return value.sort((a:any,b:any)=>(a.productName<b.productName)?-1:1)
    }
    else
    {
      return value.sort((a:any,b:any)=>(a.productPrice<b.productPrice)?-1:1)
    }
    
  }

}
