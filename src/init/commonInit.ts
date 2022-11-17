import initAuditLogActionTypes from './common/initAuditLogActionTypes';
import initEntities from './common/initEntities';
import initLanguages from './common/initLanguages';
import {Context} from '../adm/services/types';
import log from '../log';

// yarn ts-node:withContext srcinit/commonInit.ts
// runlify start env=stage yarn ts-node:withContext srcinit/commonInit.ts
// runlify start env=test yarn ts-node:withContext srcinit/commonInit.ts

const commonInit = async (ctx: Context) => {
  log.info('commonInit');

  await initAuditLogActionTypes(ctx);
  await initEntities(ctx);
  await initLanguages(ctx);
};

export default commonInit;
