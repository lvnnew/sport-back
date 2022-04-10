/* eslint-disable no-use-before-define */
import {initRoles} from './initRoles';
import {Context} from '../../adm/services/types';
import {getRuntimePermissions} from '../../adm/services/getRuntimePermissions';
import log from '../../log';

// yarn init:permissions
// ENV=dev yarn init:permissions
// ENV=prod yarn init:permissions

export const initPermissions = async (ctx: Context) => {
  await initPermissionsItself(ctx);
  await initRoles(ctx);
};

export const initPermissionsItself = async (ctx: Context) => {
  const runtimePermissions = getRuntimePermissions(ctx);
  const runtimePermissionIds = runtimePermissions.map(p => p.id);

  const customPermissions = [
    'dashboards.main',
  ];

  const permissions = [
    ...runtimePermissionIds,
    ...customPermissions,
  ];

  log.info(permissions);

  await ctx.service('permissions').createMany(permissions.map(p => ({
    id: p,
    title: p,
  })));
};
