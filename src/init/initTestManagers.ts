import {Context} from '../adm/services/types';
import Role from '../types/Role';
import initManager from './initManager';
import {AdmKeycloak} from '../clients/keycloak/getAdmKeycloak';
import log from '../log';

// yarn ts-node:withContext src/init/initTestManagers.ts
// yarn ts-node:withContext src/init/initTestManagers.ts

const testManagers = [
  {
    email: 'manager@example.com',
    password: 'manager',
    firstName: 'Manager',
    lastName: 'Test',
    roles: [Role.Manager],
  },
  {
    email: 'admin@example.com',
    password: 'admin',
    firstName: 'Admin',
    lastName: 'Test',
    roles: [Role.Admin],
  },
];

export const initTestManagers = async (
  ctx: Context,
  keycloak: AdmKeycloak,
) => {
  for (const manager of testManagers) {
    const existingManager = await ctx.prisma.manager.findMany({where: {email: manager.email}});
    if (existingManager.length) {
      log.info(`Manager with email ${manager.email} already exists. Skipping initialization.`);
      continue;
    }

    await initManager(ctx, keycloak, manager);
  }
};
