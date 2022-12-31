import {createContext} from '../adm/services/context';
import log from '../log';

// yarn ts-node src/cli/helloCtx.ts
// runlify start env=stage yarn ts-node src/cli/helloCtx.ts
// runlify start env=prod yarn ts-node src/cli/helloCtx.ts

const app = async () => {
  log.info('start');

  const ctx = await createContext();

  log.info(await ctx.service('managerLogins').count());

  await ctx.close();

  log.info('finish');
};

app();
