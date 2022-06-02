import {createContext} from '../adm/services/context';
import log from '../log';
import getQueue from '../clients/queue/getQueue';
import initPermissions from './permissions/initPermissions';
import initRoles from './permissions/initRoles';

// yarn ts-node src/init/baseInit.ts
// runlify start test yarn ts-node src/init/baseInit.ts
// runlify start prod yarn ts-node src/init/baseInit.ts

const app = async () => {
  log.info('start');

  const queue = await getQueue();
  await queue.migrate();

  const ctx = await createContext();

  // Permissions
  await initPermissions(ctx);
  await initRoles(ctx);

  await ctx.service('stats').recalculate();

  await ctx.close();

  log.info('finish');
};

app();
