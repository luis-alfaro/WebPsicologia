import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { UsuarioService } from '../../../core/services/usuario.service';
import { Usuario } from '../../../shared/models/usuario';

@Component({
  selector: 'app-usuario-detail',
  templateUrl: './usuario-detail.component.html',
  styleUrls: ['./usuario-detail.component.css']
})
export class UsuarioDetailComponent implements OnInit {
  public usuario: Usuario;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit() { this.getEntity(); }

  getEntity(): void{
    let usuarioId = this.route.snapshot.paramMap.get('usuarioId');
    if(usuarioId === 'new') this.usuario = this.usuarioService.newEmpty();
    else this.usuarioService.getById(usuarioId).subscribe(usuario => this.usuario = usuario);
  }

  goBack(): void{
    this.location.back();
  }
}