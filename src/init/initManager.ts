import {Context} from '../adm/services/types';
import bcrypt from 'bcrypt';
import {BCRYPT_SALT_ROUNDS} from '../constants';
import Role from '../types/Role';

const initManager = async (
  ctx: Context,
  {
    email,
    password,
    firstName,
    lastName,
    roles,
    tenantId,
  } :
  {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    roles: Role[];
    tenantId?: number;
  },
) => {
  const hashedPassword = await bcrypt.hash(password, BCRYPT_SALT_ROUNDS);

  const manager = await ctx.service('managers').upsertAdvanced(
    {
      lastName,
      firstName,
    },
    {
      email,
      lastName,
      firstName,
      tenantId,
    },
  );

  const managerLogin = await ctx.service('managerLogins').upsertAdvanced(
    {
      login: email,
    },
    {
      login: email,
      passwordHash: hashedPassword,
      role: '',
      emailVerified: true,
      initialPasswordChanged: true,
      locked: false,
      managerId: manager.id,
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
