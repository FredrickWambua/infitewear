import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterString: string, filterProperty:string): any {
    const result: any = []; 
    if(!value ||filterString==='' || filterProperty===''){
      return value;
    }
    value.forEach((i:any)=>{
      if(i[filterProperty].trim().toLowerCase().includes(filterString.toLocaleLowerCase())){
        result.push(i)
      }
    })
    return result;
    }
  }


