import { ConfigService } from './config.service';

export const ConfigFactory = (): ConfigService => {
  const browserWindow = window || {};
  const browserWindowEnv = browserWindow['__conf'] || {};

  const config = new ConfigService();
  for (const key in browserWindowEnv) {
    if (browserWindowEnv.hasOwnProperty(key)) config[key] = window['__conf'][key];
  }
  return config;
};