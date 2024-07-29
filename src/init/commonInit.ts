import initAuditLogActionTypes from './common/initAuditLogActionTypes';
import initEntities from './common/initEntities';
import initLanguages from './common/initLanguages';
import initManagerLoginTypes from './common/initManagerLoginTypes';
import {Context} from '../adm/services/types';
import log from '../log';
import initPlayerRoles from './common/initPlayerRoles';
import initEventTypes from './common/initEventTypes';
import initPeriodTypes from './common/initPeriodTypes';
import initPlayerAggregatedRoles from './common/initPlayerAggregatedRoles';
import initEventTypeCategories from './common/initEventTypeCategories';
import initPlayerRanks from './common/initPlayerRanks';
import initMatchStatuses from './common/initMatchStatuses';

// yarn ts-node:withContext src/init/commonInit.ts
// runlify start env=stage yarn ts-node:withContext src/init/commonInit.ts
// runlify start env=test yarn ts-node:withContext src/init/commonInit.ts

const commonInit = async (ctx: Context) => {
  log.info('commonInit');

  await initAuditLogActionTypes(ctx);
  await initManagerLoginTypes(ctx);
  await initEntities(ctx);
  await initLanguages(ctx);
  await initPlayerAggregatedRoles(ctx);
  await initPlayerRoles(ctx);
  await initEventTypes(ctx);
  await initPeriodTypes(ctx);
  await initEventTypeCategories(ctx);
  await initPlayerRanks(ctx);
  await initMatchStatuses(ctx);
};

export default commonInit;
