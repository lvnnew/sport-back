import {Context} from '../adm/services/types';
import bcrypt from 'bcrypt';
import {BCRYPT_SALT_ROUNDS} from '../constants';
import Role from '../types/Role';
import ManagerLoginType from '../types/ManagerLoginType';

const initManager = async (
  ctx: Context,
  {
    email,
    password,
    firstName,
    lastName,
    roles,
    login,
  } :
  {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    roles: Role[];
    login?: string;
  },
) => {
  const hashedPassword = await bcrypt.hash(password, BCRYPT_SALT_ROUNDS);

  const manager = await ctx.service('managers').upsertAdvanced(
    {
      email,
      lastName,
      firstName,
    },
    {
      email,
      lastName,
      firstName,
    },
  );

  const managerLogin = await ctx.service('managerLogins').upsertAdvanced(
    {
      login: login ?? email,
    },
    {
      login: login ?? email,
      passwordHash: hashedPassword,
      emailVerified: true,
      locked: false,
      managerId: manager.id,
      managerLoginTypeId: ManagerLoginType.Internal,
    },
  );

  await ctx.service('managersToRoles').createMany(roles.map(roleId => ({
    managerId: manager.id,
    roleId,
  })));

  return {
    manager,
    managerLogin,
  };
};

export default initManager;
