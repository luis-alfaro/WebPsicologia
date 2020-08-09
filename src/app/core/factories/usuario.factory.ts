import config from '../../../assets/config.json';
import { UsuarioServiceI } from '../servicesI/usuario.serviceI';
import { UsuarioMockService } from '../servicesMock/usuario-mock.service';

export const UsuarioFactory = (): UsuarioServiceI => {
  console.log(config);
  return new UsuarioMockService();
};