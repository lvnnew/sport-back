import {Context} from '../../adm/services/types';
import Role from '../../types/Role';

// DO NOT EDIT! THIS IS GENERATED FILE

const initRoles = async (ctx: Context) => {
  await ctx.service('roles').upsert({
    id: Role.Admin,
    allTenantsAvailable: true,
    hasAllPermissions: true,
    title: 'Админ',
  });
  await ctx.service('roles').upsert({
    id: Role.Manager,
    allTenantsAvailable: false,
    hasAllPermissions: false,
    title: 'Менеджер',
  });
};

export default initRoles;
