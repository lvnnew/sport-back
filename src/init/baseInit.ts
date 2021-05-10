import {getAgrContext} from '../agr/services/context';
import {log} from '../log';
import {getQueue} from '../clients/queue/getQueue';
import {initTestUser} from './initTestUser';

// ts-node src/init/baseInit.ts

const app = async () => {
  log.info('start');

  const queue = await getQueue();
  await queue.migrate();

  const ctx = await getAgrContext();

  await initTestUser(ctx);

  await ctx.stats.recalculate();

  await ctx.close();

  log.info('finish');
};

app();
