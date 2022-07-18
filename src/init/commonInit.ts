import {createContext} from '../adm/services/context';
import initAuditLogActionTypes from './common/initAuditLogActionTypes';
import initEntities from './common/initEntities';
import initLanguages from './common/initLanguages';

// yarn ts-node src/init/commonInit.ts
// runlify start env=stage yarn ts-node src/init/commonInit.ts
// runlify start env=test yarn ts-node src/init/commonInit.ts

const app = async () => {
  const ctx = await createContext();

  await initAuditLogActionTypes(ctx);
  await initEntities(ctx);
  await initLanguages(ctx);

  await ctx.close();
};

app();
