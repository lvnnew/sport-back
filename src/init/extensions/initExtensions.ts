import {Context} from '../../adm/services/types';
import log from '../../log';

// runlify start env=prod yarn ts-node:withContext src/init/extensions/initIndexes.ts

const initExtensions = async (_ctx: Context) => {
  log.info('initExtensions');
};

export default initExtensions;
