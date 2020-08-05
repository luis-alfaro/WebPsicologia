import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {
  public loaded: boolean = false;
  public titulo: string = "mi título";

  constructor() { }
}