import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent implements OnInit {

  public nombre: string = 'Piero'
  public gender: string = 'masculino'

  //Mapping i18nSelect
  public genderMapping = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //clients
  public clientes: string[] = ['Piero', 'Roberto', 'Consuelo', 'Pavel', 'Rigoberto']
  //Maping i18nPlural
  public clientsMapping = {
    '=0': 'No tenemos ningún cliente esperando',
    '=1': 'Tenemos un cliente esperando',
    '=2': 'Tenemos dos clientes esperando',
    'other': 'Tenemos # clientes esperando',
  }

  //KeyValue Pioe
  public persona = {
    nombre: 'Piero',
    edad: '22',
    networth: '40k/y',
    profession: 'programmer'
  }

  //Json Pipe
  public heroes = [
    {
      nombre: 'Batman',
      vuela: false
    },

    {
      nombre: 'Robin',
      vuela: false
    },

    {
      nombre: 'Superman',
      vuela: true
    }
  ]

  //Async Pioe
  public myObservable = interval(1000) //0,1,2,3,4,5,6

  public myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promesa resuelta')
    }, 3000)
  })

  constructor() { }

  ngOnInit(): void {
  }

  changePerson(): void {
    this.nombre = 'Pierina'
    this.gender = 'femenino'
  }

  deleteClient(): void{
    this.clientes.shift()
  }



}
