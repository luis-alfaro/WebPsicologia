import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Usuario } from '../../shared/models/usuario';

export abstract class UsuarioServiceI {
  getAll: () => Observable<Usuario[]>;
  getById: (_id: string) => Observable<Usuario>;
  create: (usuario: Usuario) => void;
  delete: (_id: string) => Observable<boolean>;
  next: () => Usuario;
  newEmpty: () => Usuario;
}