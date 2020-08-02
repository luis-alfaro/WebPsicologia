import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { UsuarioServiceI } from '../servicesI/usuario.serviceI';
import { Usuario } from '../../shared/models/usuario';
import { USUARIO } from '../mocks/usuario-template.mock';

@Injectable()
export class UsuarioMockService extends UsuarioServiceI { 
  listUsuario: Usuario[] = [];

  constructor() {
    super();
    for (let i: number = 0; i < 5; i++) this.listUsuario.push(this.next());
  }

  public getAll = function(): Observable<Usuario[]> { return of(this.listUsuario); }

  public getById = function(_id: string): Observable<Usuario> {
    return of(this.listUsuario.find(usuario => usuario._id === _id));
  }

  public create = function(usuario: Usuario): void { this.listUsuario.push(usuario); }

  public delete = function(_id: string): Observable<boolean> {
    this.listUsuario = this.listUsuario.filter(usuario => usuario._id !== _id);
    return of(true);
  }

  public next = function(): Usuario { return this.new(this.listUsuario.length.toString()); }

  public newEmpty = function(): Usuario {
    return {
      _id: '',
      userName: '',
      password: '',
      rolId: null,
      nombres: '',
      apellidos: ''
    };
  }

  private new(id: string): Usuario {
    return {
      _id: USUARIO._id.replace('{id}', id),
      userName: USUARIO.userName.replace('{id}', id),
      password: USUARIO.password.replace('{id}', id),
      rolId: null,
      nombres: USUARIO.nombres.replace('{id}', id),
      apellidos: USUARIO.apellidos.replace('{id}', id)
    };
  }
}