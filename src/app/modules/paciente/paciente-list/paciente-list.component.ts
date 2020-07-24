import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../../../core/servicios/paciente.service';

@Component({
  selector: 'app-paciente-list',
  templateUrl: './paciente-list.component.html',
  styleUrls: ['./paciente-list.component.css']
})
export class PacienteListComponent implements OnInit {
  constructor(private pacienteService:PacienteService) { }

  ngOnInit() {
    console.log(this.pacienteService.getList());
  }
}