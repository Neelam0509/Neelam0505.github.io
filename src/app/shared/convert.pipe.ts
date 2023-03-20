import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name:'convert'
})
export class Convert implements PipeTransform{
  transform(value: string,replaceWith=''):string {
    return value.replace('-',replaceWith);
    //return value.split('').reverse().join('');

  }

}
