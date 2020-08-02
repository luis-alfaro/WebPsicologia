import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { PacienteServiceI } from '../servicesI/paciente.serviceI';
import { Paciente } from '../../shared/models/paciente';
import { PACIENTE } from '../mocks/paciente-template.mock';

@Injectable()
export class PacienteMockService extends PacienteServiceI {
  private listPaciente: Paciente[] = [];

  constructor() {
    super();
    for (let i: number = 0; i < 5; i++) this.listPaciente.push(this.next());
  }

  public getAll = function(): Observable<Paciente[]> { return of(this.listPaciente); }

  public create = function(paciente: Paciente): void { this.listPaciente.push(paciente); }

  public next = function(): Paciente { return this.new(this.listPaciente.length.toString()); }
  
  private new(id: string): Paciente {
    return {
      _id: PACIENTE._id.replace('{id}', id),
      nombres: PACIENTE.nombres.replace('{id}', id),
      apellidos: PACIENTE.apellidos.replace('{id}', id),
      telefono: PACIENTE.telefono.replace('{id}', id),
      celular: PACIENTE.celular.replace('{id}', id),
      email: PACIENTE.email.replace('{id}', id),
      descripcion: PACIENTE.descripcion.replace('{id}', id),
      psicologoId: null
    };
  }
}