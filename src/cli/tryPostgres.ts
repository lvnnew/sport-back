import {createContext} from '../adm/services/context';
import log from '../log';

// yarn ts-node src/cli/tryPostgres.ts

const app = async () => {
  log.info('start');

  const ctx = await createContext();

  const result = await ctx.postgres.query('SELECT 1 as value;');
  log.info(result.rows);

  await ctx.close();

  log.info('finish');
};

app();
