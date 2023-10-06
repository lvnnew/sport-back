import initAuditLogActionTypes from './common/initAuditLogActionTypes';
import initEntities from './common/initEntities';
import initLanguages from './common/initLanguages';
import initManagerLoginTypes from './common/initManagerLoginTypes';
import {Context} from '../adm/services/types';
import log from '../log';

// yarn ts-node:withContext src/init/commonInit.ts
// runlify start env=stage yarn ts-node:withContext src/init/commonInit.ts
// runlify start env=test yarn ts-node:withContext src/init/commonInit.ts

const commonInit = async (ctx: Context) => {
  log.info('commonInit');

  await initAuditLogActionTypes(ctx);
  await initManagerLoginTypes(ctx);
  await initEntities(ctx);
  await initLanguages(ctx);
};

export default commonInit;
