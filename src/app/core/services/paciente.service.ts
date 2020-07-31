import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Paciente } from '../../shared/models/paciente';
import { PACIENTE } from '../mocks/paciente-template.mock';

@Injectable()
export class PacienteService {
  listPaciente: Paciente[] = [];

  constructor() {
    for (let i: number = 0; i < 5; i++) this.listPaciente.push(this.next());
  }

  getAll(): Observable<Paciente[]> {
    return of(this.listPaciente);
  }

  create(paciente: Paciente): void {
    this.listPaciente.push(paciente);
  }

  new(id: string): Paciente {
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

  next(): Paciente { return this.new(this.listPaciente.length.toString()); }
}