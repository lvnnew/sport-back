import {Context} from '../adm/services/context';
import {Role} from '../types/enums';
import {initManager} from './initManager';

// yarn ts-node ./src/init/wrap.ts  src/init/initTestManagers.ts
// PRJ_PG_URI=$PRJ_STAGE_PG_URI yarn ts-node ./src/init/wrap.ts  src/init/initTestManagers.ts
// PRJ_PG_URI=$PRJ_PROD_PG_URI yarn ts-node ./src/init/wrap.ts src/init/initTestManagers.ts

export const initTestManagers = async (ctx: Context) => {
  await Promise.all([
    initManager(
      ctx,
      {
        email: 'manager@example.com',
        password: 'manager',
        firstName: 'Manager',
        lastName: 'Test',
        roles: [Role.Manager],
      },
    ),
    initManager(
      ctx,
      {
        email: 'admin@example.com',
        password: 'admin',
        firstName: 'Admin',
        lastName: 'Test',
        roles: [Role.Admin],
      },
    ),
  ]);
};
