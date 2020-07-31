import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../core/services/usuario.service';

import { Usuario } from '../../../shared/models/usuario';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {
  listUsuario: Usuario[];

  constructor(private usuarioService:UsuarioService) { }

  ngOnInit() {    
    this.usuarioService.getAll()
      .subscribe(listUsuario => this.listUsuario = listUsuario);
  }

  onDelete(_id: string): void {
    alert(`¿Desea eliminar usuario ${_id}?`);
  }
}