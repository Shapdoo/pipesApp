import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform( heroes: Heroe[], orderBy?: string ): Heroe[] {

    if(orderBy === 'nombre'){
      return heroes.sort((a, b) => (a.nombre > b.nombre) ? 1 : -1 );
    }

    if(orderBy === 'volar'){
      return heroes.sort((a, b) => (a.vuela > b.vuela) ? -1 : 1 );
    }

    if(orderBy === 'color'){
      // return heroes.sort((a, b) => (a.color > b.color) ? 1 : -1 );
      return heroes.sort((a, b) => (a.color > b.color) ? 1 : -1 );
    }

    return heroes
  }

}
