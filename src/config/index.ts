import {Config} from './config';
import {ConfigUtils} from './getConfigUtils';

export const configUtils = new ConfigUtils();

export const getConfig = (): Promise<Config> => configUtils.getConfig();
