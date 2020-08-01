import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Usuario } from '../../shared/models/usuario';
import { USUARIO } from '../mocks/usuario-template.mock';

@Injectable()
export class UsuarioService { 
  listUsuario: Usuario[] = [];

  constructor() {
    for (let i: number = 0; i < 5; i++) this.listUsuario.push(this.next());
  }

  getAll(): Observable<Usuario[]> {
    return of(this.listUsuario);
  }

  getById(_id: string): Observable<Usuario> {
    return of(this.listUsuario.find(usuario => usuario._id === _id));
  }

  create(usuario: Usuario): void {
    this.listUsuario.push(usuario);
  }

  delete(_id: string): Observable<boolean> {
    this.listUsuario = this.listUsuario.filter(usuario => usuario._id !== _id);
    return of(true);
  }

  new(id: string): Usuario {
    return {
      _id: USUARIO._id.replace('{id}', id),
      userName: USUARIO.userName.replace('{id}', id),
      password: USUARIO.password.replace('{id}', id),
      rolId: null,
      nombres: USUARIO.nombres.replace('{id}', id),
      apellidos: USUARIO.apellidos.replace('{id}', id)
    };
  }

  newEmpty(): Usuario {
    return {
      _id: '',
      userName: '',
      password: '',
      rolId: null,
      nombres: '',
      apellidos: ''
    };
  }

  next(): Usuario { return this.new(this.listUsuario.length.toString()); }
}