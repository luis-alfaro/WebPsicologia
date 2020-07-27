import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Paciente } from '../../shared/models/paciente';
import { PACIENTES } from '../mocks/paciente.mock';

@Injectable()
export class PacienteService {
  constructor() { }

  getAll(): Observable<Paciente[]> {
    return of(PACIENTES);
  }
}