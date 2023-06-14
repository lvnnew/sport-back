import winston, {format, Logger as WLogger} from 'winston';
import {ConfigUtils} from './config/getConfigUtils';

export type Logger = Pick<WLogger, 'info' | 'error' | 'debug' | 'warn'>;

const log: Logger = winston.createLogger({
  defaultMeta: {
    loggerName: 'adm-graph-server',
  },
  format: format.combine(
    format.errors({stack: true}),
    format.timestamp(),
    ConfigUtils.getFromNconf('logs.format') === 'json' ? winston.format.json() : winston.format.cli(),
  ),
  transports: [
    new winston.transports.Console(),
  ],
});

export default log;
