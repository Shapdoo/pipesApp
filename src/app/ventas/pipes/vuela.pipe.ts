import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'vuela'
})
export class VuelaPipe implements PipeTransform{

  transform(value: boolean): string {
    return value ? 'Si puede volar' : 'No puede volar'
  }
}
