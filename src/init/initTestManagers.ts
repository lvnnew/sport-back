import {Context} from '../adm/services/context';
import {Role} from '../types/enums';
import {initManager} from './initManager';

// yarn ts-node:withContext  src/init/initTestManagers.ts
// ENV=stage yarn ts-node:withContext  src/init/initTestManagers.ts

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

export const initTestManagers = async (ctx: Context) => {
  await Promise.all(testManagers.map(manager => initManager(ctx, manager)));
};
