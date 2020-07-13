import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {
  saludo: string = "Bienvenido!!!";

  constructor() { }

  ngOnInit() {
  }
}