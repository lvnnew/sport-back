/* eslint-disable no-use-before-define */
import {initRoles} from './initRoles';
import {Context} from '../../adm/services/context';
import {getRuntimePermissions} from '../../adm/services/getRuntimePermissions';
import {log} from '../../log';

// yarn init:permissions
// AGR_DATABASE_URI=$AGR_STAGE_DATABASE_URI yarn init:permissions
// AGR_DATABASE_URI=$AGR_PROD_DATABASE_URI yarn init:permissions

export const initPermissions = async (ctx: Context) => {
  await initPermissionsItself(ctx);
  await initRoles(ctx);
};

export const initPermissionsItself = async (ctx: Context) => {
  const runtimePermissions = getRuntimePermissions();

  log.info(runtimePermissions.map(p => p.id));

  await ctx.permissions.createMany(runtimePermissions.map(p => ({
    id: p.id,
    title: p.id,
  })));
};
