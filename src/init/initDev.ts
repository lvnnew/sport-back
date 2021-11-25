import {getOrCreateContext} from '../adm/services/context';
import log from '../log';
import {getQueue} from '../clients/queue/getQueue';
import {initTestManagers} from './initTestManagers';

// yarn ts-node src/init/initDev.ts
// DATABASE_URI=$AGR_TEST_DATABASE_URI yarn ts-node src/init/initDev.ts
// ENV=stage yarn ts-node src/init/initDev.ts

// DATABASE_URI=$AGR_DEV_TUNIK_DATABASE_URI yarn ts-node src/init/initDev.ts
// DATABASE_URI=$AGR_DEV_THTH_DATABASE_URI yarn ts-node src/init/initDev.ts
// DATABASE_URI=$AGR_DEV_PAPKA_DATABASE_URI yarn ts-node src/init/initDev.ts

// DATABASE_URI=$AGR_DEV_LAVROVA_DATABASE_URI yarn ts-node src/init/initDev.ts
// DATABASE_URI=$AGR_DEV_FERUNELLI_DATABASE_URI yarn ts-node src/init/initDev.ts
// DATABASE_URI=$AGR_DEV_KARIMOVA_DATABASE_URI yarn ts-node src/init/initDev.ts

const app = async () => {
  log.info('start');

  const queue = await getQueue();
  await queue.migrate();

  const ctx = await getOrCreateContext();

  await initTestManagers(ctx);

  await ctx.close();

  log.info('finish');
};

app();
