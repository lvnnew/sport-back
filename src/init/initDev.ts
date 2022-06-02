import {createContext} from '../adm/services/context';
import log from '../log';
import getQueue from '../clients/queue/getQueue';
import {initTestManagers} from './initTestManagers';

// yarn ts-node src/init/initDev.ts
// runlify start test yarn ts-node src/init/initDev.ts
// yarn ts-node src/init/initDev.ts

// runlify start anna_laznia yarn ts-node src/init/initDev.ts
// runlify start yurii_papka yarn ts-node src/init/initDev.ts

// runlify start lavrova yarn ts-node src/init/initDev.ts
// runlify start annykarimova yarn ts-node src/init/initDev.ts

const app = async () => {
  log.info('start');

  const queue = await getQueue();
  await queue.migrate();

  const ctx = await createContext();

  await initTestManagers(ctx);

  await ctx.close();

  log.info('finish');
};

app();
