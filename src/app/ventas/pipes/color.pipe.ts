import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../interfaces/ventas.interfaces';
@Pipe({
  name: 'color',
})
export class ColorPipe implements PipeTransform {
  transform(value: number): string {
    let color = '';

    switch (value) {
      case 1:
        color = Color[value];
        break;

      case 2:
        color = Color[value];
        break;

      case 3:
        color = Color[value];
        break;

      case 4:
        color = Color[value];
        break;
    }
    return color
  }
}
