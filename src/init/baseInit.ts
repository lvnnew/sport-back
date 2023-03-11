import {createContext} from '../adm/services/context';
import getQueue from '../clients/queue/getQueue';
import initRolesWithPermissions from './roles/initRolesWithPermissions';
import commonInit from './commonInit';
import initS3Buckets from './initS3Buckets';
import initIndexes from './indexes/initIndexes';
import initExtensaions from './extensions/initExtensaions';

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

  await initIndexes(ctx);

  await initExtensaions(ctx);

  // Permissions
  await initRolesWithPermissions(ctx);

  await ctx.service('stats').recalculate();

  await ctx.close();
};

app();
