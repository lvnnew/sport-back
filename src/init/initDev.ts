import {createContext} from '../adm/services/context';
import getQueue from '../clients/queue/getQueue';
import {initTestManagers} from './initTestManagers';
import getAdmKeycloak from '../clients/keycloak/getAdmKeycloak';

// yarn init:dev
// runlify start env=test yarn init:dev
// runlify start env=stage yarn init:dev

// runlify start env=anna_laznia yarn init:dev
// runlify start env=yurii_papka yarn init:dev

// runlify start env=lavrova yarn init:dev
// runlify start env=annykarimova yarn init:dev

const app = async () => {
  const queue = await getQueue();
  await queue.migrate();

  const ctx = await createContext();
  const keycloak = await getAdmKeycloak();

  await initTestManagers(ctx);

  await ctx.close();
};

app();
