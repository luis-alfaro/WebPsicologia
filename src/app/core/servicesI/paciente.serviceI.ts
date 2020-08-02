import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Paciente } from '../../shared/models/paciente';

export abstract class PacienteServiceI {
  getAll: () => Observable<Paciente[]>;
  create: (paciente: Paciente) => void;
  next: () => Paciente;
}