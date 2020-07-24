import { Injectable } from '@angular/core';

@Injectable()
export class PacienteService {

  constructor() { }

  getList(){ return [ { 'Id': 1 }, { 'Id': 2 } ] }
}