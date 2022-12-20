import {getConfig} from '../config';

const getAppEnvUnderscorePrefix = async () => {
  const {appName, appEnvironment} = await getConfig();

  if (!appName || !appEnvironment) {
    throw new Error('appName and appEnvironment configuration variables must be set');
  }

  return `${appName}_${appEnvironment}`;
};

export default getAppEnvUnderscorePrefix;
