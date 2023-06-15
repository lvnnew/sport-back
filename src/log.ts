import {configUtils} from './config';
import {TLogger} from './config/getConfigUtils';

export type Logger = TLogger;

const log: TLogger = configUtils.getLog();

export default log;
