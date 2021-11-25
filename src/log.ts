import winston, {format} from 'winston';
import {getFromNconf} from './config';

const log = winston.createLogger({
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
