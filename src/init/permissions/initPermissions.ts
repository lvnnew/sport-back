/* eslint-disable sort-keys-fix/sort-keys-fix */
import {Context} from '../../adm/services/context';
import {getRuntimePermissions} from '../../adm/services/getRuntimePermissions';
import {log} from '../../log';

// yarn ts-node ./src/init/wrap.ts src/init/permissions/initPermissions.ts
// AGR_PG_URI=$AGR_STAGE_PG_URI yarn ts-node ./src/init/wrap.ts src/init/permissions/initPermissions.ts
// AGR_PG_URI=$AGR_PROD_PG_URI yarn ts-node ./src/init/wrap.ts src/init/permissions/initPermissions.ts

export const initPermissions = async (ctx: Context) => {
  const runtimePermissions = getRuntimePermissions();

  log.info(runtimePermissions.map(p => p.id));

  await ctx.permissions.createMany(runtimePermissions.map(p => ({
    id: p.id,
    title: p.id,
  })));
};
