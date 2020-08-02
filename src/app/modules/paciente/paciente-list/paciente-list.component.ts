import { Component, OnInit } from '@angular/core';

import { PacienteServiceI } from '../../../core/servicesI/paciente.serviceI';
import { Paciente } from '../../../shared/models/paciente';

@Component({
  selector: 'app-paciente-list',
  templateUrl: './paciente-list.component.html',
  styleUrls: ['./paciente-list.component.css']
})
export class PacienteListComponent implements OnInit {
  listPaciente: Paciente[];

  constructor(private pacienteService: PacienteServiceI) { }

  ngOnInit() {    
    this.pacienteService.getAll()
      .subscribe(listPaciente => this.listPaciente = listPaciente);
  }
}