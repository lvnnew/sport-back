import {getOrCreateContext} from '../adm/services/context';
import log from '../log';
import {getQueue} from '../clients/queue/getQueue';
import {initPermissions} from './permissions/initPermissions';
import {initRoles} from './permissions/initRoles';

// yarn ts-node src/init/baseInit.ts
// ENV=stage yarn ts-node src/init/baseInit.ts
// DATABASE_URI=$AGR_TEST_DATABASE_URI yarn ts-node src/init/baseInit.ts
// ENV=prod yarn ts-node src/init/baseInit.ts

const app = async () => {
  log.info('start');

  const queue = await getQueue();
  await queue.migrate();

  const ctx = await getOrCreateContext();

  // Permissions
  await initPermissions(ctx);
  await initRoles(ctx);

  await ctx.stats.recalculate();

  await ctx.close();

  log.info('finish');
};

app();
