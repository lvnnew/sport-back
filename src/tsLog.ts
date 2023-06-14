import {Logger} from 'tslog';
import {ConfigUtils} from './config/getConfigUtils';

export const log = new Logger({
  maskValuesOfKeys: [],
  name: 'adm-graph-server',
  type: ConfigUtils.getFromNconf('logs.format') === 'json' ? 'json' : 'pretty',
});
