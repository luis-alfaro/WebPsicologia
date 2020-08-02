import { Component, OnInit } from '@angular/core';

import { UsuarioServiceI } from '../../../core/servicesI/usuario.serviceI';
import { Usuario } from '../../../shared/models/usuario';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {
  listUsuario: Usuario[];

  constructor(private usuarioService: UsuarioServiceI) { }

  ngOnInit() { this.getList(); }

  getList(): void {    
    this.usuarioService.getAll()
      .subscribe(listUsuario => this.listUsuario = listUsuario);
  }

  onDelete(_id: string): void {
    if(confirm(`¿Desea eliminar usuario ${_id}?`)) {
      this.usuarioService.delete(_id)
        .subscribe(resp => {
          if(resp){            
            alert(`Se eliminó el usuario ${_id}`);
            this.getList();
          }
          else alert(`Hubo un error al eliminar el usuario ${_id}`);
        });
    }
  }
}