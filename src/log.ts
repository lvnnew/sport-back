import winston from 'winston';
import {getFromNconf} from './config';

export const log = winston.createLogger({
  defaultMeta: {
    loggerName: 'adm-graph-server',
  },
  format: getFromNconf('logs.format') === 'json' ? winston.format.json() : winston.format.cli(),
  transports: [
    new winston.transports.Console(),
  ],
});
