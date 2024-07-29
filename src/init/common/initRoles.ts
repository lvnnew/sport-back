import {Context} from '../../adm/services/types';
import Role from '../../types/Role';

// DO NOT EDIT! THIS IS GENERATED FILE

const initRoles = async (ctx: Context) => {
  await ctx.service('roles').createMany([
    {
      id: Role.Base,
      allTenantsAvailable: false,
      hasAllPermissions: false,
      title: 'Базовая роль',
    },
    {
      id: Role.Admin,
      allTenantsAvailable: true,
      hasAllPermissions: true,
      title: 'Системный администратор',
    },
    {
      id: Role.Manager,
      allTenantsAvailable: false,
      hasAllPermissions: false,
      title: 'Пользователь',
    },
    {
      id: Role.Commenter,
      allTenantsAvailable: false,
      hasAllPermissions: false,
      title: 'Комментатор',
    },
    {
      id: Role.Analyst,
      allTenantsAvailable: false,
      hasAllPermissions: false,
      title: 'Аналитик',
    },
  ]);
};

export default initRoles;
