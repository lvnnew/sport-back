import {Context} from '../../adm/services/types';
import Role from '../../types/Role';

// DO NOT EDIT! THIS IS GENERATED FILE

const initRoles = async (ctx: Context) => {
  await ctx.service('roles').upsert({
    id: Role.Admin,
    title: 'Админ',
    hasAllPermissions: true,
    allTenantsAvailable: true,
  });
  await ctx.service('roles').upsert({
    id: Role.Manager,
    title: 'Менеджер',
    hasAllPermissions: false,
    allTenantsAvailable: false,
  });
};

export default initRoles;
