import {Context} from '../adm/services/types';
import Role from '../types/Role';
import initManager from './initManager';
import {AdmKeycloak} from '../clients/keycloak/getAdmKeycloak';

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
  // todo: error when regenerating when other fields exist, you may need to check for the existence of the manager in the database
  await Promise.all(testManagers.map(manager => initManager(ctx, keycloak, manager)));
};
