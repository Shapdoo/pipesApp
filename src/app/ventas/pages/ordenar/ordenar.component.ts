import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent implements OnInit {

  public toggleUppercase: boolean = false
  public orderBy: string = ''

  public heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color[3]
    },

    {
      nombre: 'Flash',
      vuela: false,
      color: Color[1]
    },

    {
      nombre: 'Robin',
      vuela: false,
      color: Color[4]
    },

    {
      nombre: 'Batman',
      vuela: false,
      color: Color[2]
    },

    {
      nombre: 'Green Lantern',
      vuela: true,
      color: Color[4]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onToggleUppercase(): void {
    this.toggleUppercase = !this.toggleUppercase
  }

  onOrderBy(orderBy: string): void{
    this.orderBy = orderBy
  }

}
