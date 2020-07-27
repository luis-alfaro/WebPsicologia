import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../../../core/services/paciente.service';

import { Paciente } from '../../../shared/models/paciente';

@Component({
  selector: 'app-paciente-list',
  templateUrl: './paciente-list.component.html',
  styleUrls: ['./paciente-list.component.css']
})
export class PacienteListComponent implements OnInit {
  listPaciente: Paciente[];

  constructor(private pacienteService:PacienteService) { }

  ngOnInit() {    
    this.pacienteService.getAll()
      .subscribe(listPaciente => this.listPaciente = listPaciente);
  }
}