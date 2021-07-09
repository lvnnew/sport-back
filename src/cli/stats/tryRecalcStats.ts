/* eslint-disable sort-keys-fix/sort-keys-fix */
import {getOrCreateContext} from '../../agr/services/context';
import {log} from '../../log';

// ts-node src/cli/stats/tryRecalcStats.ts

const app = async () => {
  log.info('start');

  const ctx = await getOrCreateContext();

  log.info(await ctx.stats.recalculate());

  await ctx.close();

  log.info('finish');
};

app();
