import {createContext} from '../adm/services/context';
import getQueue from '../clients/queue/getQueue';
import {initTestManagers} from './initTestManagers';

// yarn ts-node src/init/initDev.ts
// runlify start env=test yarn ts-node src/init/initDev.ts
// runlify start env=stage yarn ts-node src/init/initDev.ts
// yarn ts-node src/init/initDev.ts

// runlify start env=anna_laznia yarn ts-node src/init/initDev.ts
// runlify start env=yurii_papka yarn ts-node src/init/initDev.ts

// runlify start env=lavrova yarn ts-node src/init/initDev.ts
// runlify start env=annykarimova yarn ts-node src/init/initDev.ts

const app = async () => {
  const queue = await getQueue();
  await queue.migrate();

  const ctx = await createContext();

  await initTestManagers(ctx);

  await ctx.close();
};

app();
