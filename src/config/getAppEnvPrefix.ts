import {getConfig} from '../config';

const getAppEnvPrefix = async () => {
  const {appName, appEnvironment} = await getConfig();

  if (!appName || !appEnvironment) {
    throw new Error('appName and appEnvironment configuration variables must be set');
  }

  return `${appName}-${appEnvironment}`;
};

export default getAppEnvPrefix;
