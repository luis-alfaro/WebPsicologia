import { Component, OnInit } from '@angular/core';

import { PacienteServiceI } from '../../../core/servicesI/paciente.serviceI';
import { Paciente } from '../../../shared/models/paciente';

@Component({
  selector: 'app-public-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css']
})
export class ContactanosComponent implements OnInit {
  paciente: Paciente;

  constructor(private pacienteService: PacienteServiceI) { }

  ngOnInit() {
  }

  onSave(): void {
    this.pacienteService.create(this.pacienteService.next());
    alert('paciente creado')
  }
}