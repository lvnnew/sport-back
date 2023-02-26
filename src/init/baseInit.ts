import {createContext} from '../adm/services/context';
import getQueue from '../clients/queue/getQueue';
import initRolesWithPermissions from './roles/initRolesWithPermissions';
import commonInit from './commonInit';
import initS3Buckets from './initS3Buckets';

// yarn init:base
// runlify start env=test yarn init:base
// runlify start env=stage yarn init:base
// runlify start env=prod yarn init:base

const app = async () => {
  const queue = await getQueue();
  await queue.migrate();

  const ctx = await createContext();

  await initS3Buckets();

  await commonInit(ctx);

  // Permissions
  await initRolesWithPermissions(ctx);

  await ctx.service('stats').recalculate();

  await ctx.close();
};

app();
