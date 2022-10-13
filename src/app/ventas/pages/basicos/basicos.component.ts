import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {


  public nombreLower: string = "piero"
  public nombreUpper: string = "PIERO"
  public nombreCompleto: string = "PiErO DavIlA"


  fecha: Date = new Date()

  constructor() { }

  ngOnInit(): void {
  }

}
