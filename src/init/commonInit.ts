import {createContext} from '../adm/services/context';
import log from '../log';
import initAuditLogActionTypes from './common/initAuditLogActionTypes';
import initEntities from './common/initEntities';
import initLanguages from './common/initLanguages';

// yarn ts-node src/init/commonInit.ts
// ENV=stage yarn ts-node src/init/commonInit.ts
// ENV=test yarn ts-node src/init/commonInit.ts

const app = async () => {
  log.info('start');

  const ctx = await createContext();

  await initAuditLogActionTypes(ctx);
  await initEntities(ctx);
  await initLanguages(ctx);

  await ctx.close();

  log.info('finish');
};

app();
