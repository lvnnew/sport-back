/* eslint-disable no-use-before-define */
import initRoles from './initRoles';
import {Context} from '../../adm/services/types';
import {getRuntimePermissions} from '../../adm/services/getRuntimePermissions';

// yarn init:permissions
// yarn init:permissions
// runlify env prod yarn init:permissions

const initPermissions = async (ctx: Context) => {
  await initPermissionsItself(ctx);
  await initRoles(ctx);
};

const initPermissionsItself = async (ctx: Context) => {
  const runtimePermissions = getRuntimePermissions(ctx);
  const runtimePermissionIds = runtimePermissions.map(p => p.id);

  const customPermissions = [
    'dashboards.main',
  ];

  const permissions = [
    ...runtimePermissionIds,
    ...customPermissions,
  ];

  await ctx.service('permissions').createMany(permissions.map(p => ({
    id: p,
    title: p,
  })));
};

export default initPermissions;
