import { ConfigService } from '../config/config.service';
import { UsuarioServiceI } from '../servicesI/usuario.serviceI';
import { UsuarioMockService } from '../servicesMock/usuario-mock.service';

export const UsuarioFactory = (config: ConfigService): UsuarioServiceI => {
  console.log(config);
  return new UsuarioMockService();
};