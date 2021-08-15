import {getOrCreateContext} from '../adm/services/context';
import {log} from '../log';

// yarn ts-node src/cli/tryPostgres.ts

const app = async () => {
  log.info('start');

  const ctx = await getOrCreateContext();

  const result = await ctx.postgres.query('SELECT 1;');
  log.info(result.rows);

  await ctx.close();

  log.info('finish');
};

app();
