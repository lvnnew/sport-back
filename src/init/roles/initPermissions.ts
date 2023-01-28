import {Context} from '../../adm/services/types';
import {getRuntimePermissions} from '../../adm/services/getRuntimePermissions';

const initPermissions = async (ctx: Context) => {
  const runtimePermissions = getRuntimePermissions(ctx);
  const runtimePermissionIds = runtimePermissions.map(p => p.id);

  const customPermissions = [
    'dashboards.main',
    'managers.changePasswordByManagerId',
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
