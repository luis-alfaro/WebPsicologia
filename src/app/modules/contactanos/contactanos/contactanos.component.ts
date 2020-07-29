import { Component, OnInit } from '@angular/core';

import { Paciente } from '../../../shared/models/paciente';
import { PacienteService } from '../../../core/services/paciente.service';

@Component({
  selector: 'app-public-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css']
})
export class ContactanosComponent implements OnInit {
  paciente: Paciente;

  constructor(private pacienteService: PacienteService) { }

  ngOnInit() {
  }

  onSave(): void {
    this.pacienteService.create(this.pacienteService.next());
    alert('paciente creado')
  }
}