/* eslint-disable sort-keys-fix/sort-keys-fix */
import {Context} from '../../adm/services/context';

// yarn ts-node ./src/init/wrap.ts src/init/permissions/initManagers.ts
// AGR_PG_URI=$AGR_STAGE_PG_URI yarn ts-node ./src/init/wrap.ts src/init/permissions/initManagers.ts
// AGR_PG_URI=$AGR_PROD_PG_URI yarn ts-node ./src/init/wrap.ts src/init/permissions/initManagers.ts

export const initManagers = async (ctx: Context) => {
  const managers = await ctx.managers.all();

  await ctx.managersToRoles.createMany(managers.map(manager => ({
    manageId: manager.id,
    roleId: 'manager',
  })));
};
