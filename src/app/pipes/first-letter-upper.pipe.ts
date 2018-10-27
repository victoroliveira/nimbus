import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstLetterUpper'
})
export class FirstLetterUpperPipe implements PipeTransform {

  transform(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

}
