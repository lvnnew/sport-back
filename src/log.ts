import winston, {format, Logger as WLogger} from 'winston';
import {getFromNconf} from './config';

export type Logger = Pick<WLogger, 'info' | 'error' | 'debug'>

const log: Logger = winston.createLogger({
  defaultMeta: {
    loggerName: 'adm-graph-server',
  },
  format: format.combine(
    format.errors({stack: true}),
    getFromNconf('logs.format') === 'json' ? winston.format.json() : winston.format.cli(),
  ),
  transports: [
    new winston.transports.Console(),
  ],
});

export default log;
