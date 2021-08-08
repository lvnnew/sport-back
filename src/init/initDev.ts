/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable sort-keys-fix/sort-keys-fix */
import {getOrCreateContext} from '../adm/services/context';
import {log} from '../log';
import {getQueue} from '../clients/queue/getQueue';
import {initTestAdmin} from './initTestAdmin';
import {initTestManager} from './initTestManager';

// yarn ts-node src/init/initDev.ts
// AGR_PG_URI=$AGR_TEST_PG_URI yarn ts-node src/init/initDev.ts
// AGR_PG_URI=$AGR_STAGE_PG_URI yarn ts-node src/init/initDev.ts
// AGR_PG_URI=$AGR_DEV_TUNIK_PG_URI yarn ts-node src/init/initDev.ts
// AGR_PG_URI=$AGR_DEV_THTH_PG_URI yarn ts-node src/init/initDev.ts
// AGR_PG_URI=$AGR_DEV_PAPKA_PG_URI yarn ts-node src/init/initDev.ts

// AGR_PG_URI=$AGR_DEV_LAVROVA_PG_URI yarn ts-node src/init/initDev.ts
// AGR_PG_URI=$AGR_DEV_FERUNELLI_PG_URI yarn ts-node src/init/initDev.ts
// AGR_PG_URI=$AGR_DEV_KARIMOVA_PG_URI yarn ts-node src/init/initDev.ts

const app = async () => {
  log.info('start');

  const queue = await getQueue();
  await queue.migrate();

  const ctx = await getOrCreateContext();

  await initTestAdmin(ctx);
  await initTestManager(ctx);

  await ctx.close();

  log.info('finish');
};

app();
