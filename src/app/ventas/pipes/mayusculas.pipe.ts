import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "mayusculas"
})
export class MayusculasPipe implements PipeTransform {

  transform(value: string, enMayusculas?: boolean): string {

      return !enMayusculas ? value.toLocaleLowerCase() : value.toUpperCase()
  }
}
