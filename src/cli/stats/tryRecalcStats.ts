import {getOrCreateContext} from '../../adm/services/context';
import {log} from '../../log';

// yarn ts-node src/cli/stats/tryRecalcStats.ts

const app = async () => {
  log.info('start');

  const ctx = await getOrCreateContext();

  log.info(await ctx.stats.recalculate());

  await ctx.close();

  log.info('finish');
};

app();
