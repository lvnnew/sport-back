import {Context} from '../../adm/services/types';
import log from '../../log';

// runlify start env=prod yarn ts-node:withContext src/init/indexes/initIndexes.ts

const initIndexes = async (_ctx: Context) => {
  log.info('initIndexes');
};

export default initIndexes;
