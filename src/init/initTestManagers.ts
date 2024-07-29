import {Context} from '../adm/services/types';
import Role from '../types/Role';
import initManager from './initManager';
import getAdmKeycloak, {AdmKeycloak} from '../clients/keycloak/getAdmKeycloak';
import log from '../log';

// yarn ts-node:withContext src/init/initTestManagers.ts
// yarn ts-node:withContext src/init/initTestManagers.ts

const testManagers = [
  {
    email: 'manager@example.com',
    login: 'manager@example.com',
    password: 'manager',
    firstName: 'Manager',
    lastName: 'Test',
    roles: [Role.Manager],
  },
  {
    email: 'admin@example.com',
    login: 'admin@example.com',
    password: 'admin',
    firstName: 'Admin',
    lastName: 'Test',
    roles: [Role.Admin],
  },
  {
    email: 'commenter@example.com',
    login: 'commenter@example.com',
    password: 'commenter',
    firstName: 'commenter',
    lastName: 'Test',
    roles: [Role.Commenter],
  },
  {
    email: 'analyst@example.com',
    login: 'analyst@example.com',
    password: 'analyst',
    firstName: 'analyst',
    lastName: 'analyst',
    roles: [Role.Analyst],
  },
];

export const initTestManagers = async (
  ctx: Context,
  outerKeycloak?: AdmKeycloak,
) => {
  const keycloak = outerKeycloak ? outerKeycloak : await getAdmKeycloak();
  for (const manager of testManagers) {
    const existingManager = await ctx.prisma.manager.findMany({where: {email: manager.email}});
    if (existingManager.length) {
      log.info(`Manager with email ${manager.email} already exists. Skipping initialization.`);
      continue;
    }

    await initManager(ctx, keycloak, manager);
  }
};
