import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'squareroot'
})
export class SquarerootPipe implements PipeTransform {

  transform(a: number): number {
    return Math.sqrt(a);
  }

}
