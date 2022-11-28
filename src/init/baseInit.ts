import {createContext} from '../adm/services/context';
import getQueue from '../clients/queue/getQueue';
import initPermissions from './permissions/initPermissions';
import initRoles from './permissions/initRoles';
import commonInit from './commonInit';

// yarn ts-node src/init/baseInit.ts
// runlify start env=test yarn ts-node src/init/baseInit.ts
// runlify start env=stage yarn ts-node src/init/baseInit.ts
// runlify start env=prod yarn ts-node src/init/baseInit.ts

const app = async () => {
  const queue = await getQueue();
  await queue.migrate();

  const ctx = await createContext();

  await commonInit(ctx);

  // Permissions
  await initPermissions(ctx);
  await initRoles(ctx);

  await ctx.service('stats').recalculate();

  await ctx.close();
};

app();
