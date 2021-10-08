import {getOrCreateContext} from '../adm/services/context';
import {log} from '../log';

// yarn ts-node src/cli/helloCtx.ts
// ENV=stage yarn ts-node src/cli/helloCtx.ts
// ENV=prod yarn ts-node src/cli/helloCtx.ts

const app = async () => {
  log.info('start');

  const ctx = await getOrCreateContext();

  log.info(await ctx.appLogins.count());

  await ctx.close();

  log.info('finish');
};

app();
