import { Component, OnInit } from '@angular/core';
import { Paciente } from '../../../shared/models/paciente';

@Component({
  selector: 'app-public-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css']
})
export class ContactanosComponent implements OnInit {
  paciente: Paciente;

  constructor() { }

  ngOnInit() {
  }
}