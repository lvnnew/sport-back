import {Logger} from 'tslog';
import {getFromNconf} from './config/getConfigUtils';

export const log = new Logger({
  maskValuesOfKeys: [],
  name: 'adm-graph-server',
  type: getFromNconf('logs.format') === 'json' ? 'json' : 'pretty',
});
