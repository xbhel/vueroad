export function getEnvs(envConfig: Recordable): ViteEnv {
  const config: any = {};

  for (const envName of Object.keys(envConfig)) {
    let envValue = envConfig[envName];
    envValue =
      envValue === 'true' ? true : envValue === 'false' ? false : envValue;
    if (envName === 'VITE_PORT') {
      envValue = parseInt(envValue);
    }
    config[envName] = envValue;
  }

  return config;
}
