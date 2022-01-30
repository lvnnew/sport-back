import {createContext} from '../../adm/services/context';
import log from '../../log';

// yarn ts-node src/cli/stats/tryRecalcStats.ts

const app = async () => {
  log.info('start');

  const ctx = await createContext();

  log.info(await ctx.service('stats').recalculate());

  await ctx.close();

  log.info('finish');
};

app();
