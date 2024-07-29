import {createContext} from '../adm/services/context';
import log from '../log';
import getQueue from '../clients/queue/getQueue';
import {initTestManagers} from './initTestManagers';
import getAdmKeycloak from '../clients/keycloak/getAdmKeycloak';
import {getConfig} from '../config';
import initDemoEntities from './initDemoEntities';

// yarn init:dev
// runlify start env=test yarn init:dev
// runlify start env=stage yarn init:dev
// runlify start env=dev yarn init:dev
// yarn runlify start env=local yarn init:dev

const app = async () => {
  log.info('start');
  const {
    keycloakAdmCliSecret,
  } = await getConfig();

  const queue = await getQueue();
  await queue.migrate();

  const ctx = await createContext();

  if (keycloakAdmCliSecret && keycloakAdmCliSecret.length) {
    const keycloak = await getAdmKeycloak();
    await initTestManagers(ctx, keycloak);
    await initDemoEntities(ctx);
  }

  await ctx.close();

  log.info('finish');
};

app();
