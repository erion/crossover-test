import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ucfirst'
})
export class UcfirstPipe implements PipeTransform {

  transform(value: string): string {
    let string = value.split("");
    string[0] = string[0].toUpperCase();
    return string.join("");
  }

}
