import {getOrCreateContext} from '../adm/services/context';
import {log} from '../log';

// yarn ts-node src/cli/tryKnex.ts

const app = async () => {
  log.info('start');

  const ctx = await getOrCreateContext();

  log.info(
    await ctx.knex
      .table('Manager')
      .select('id')
      .limit(3),
  );

  await ctx.close();
  log.info('finish');
};

app();
