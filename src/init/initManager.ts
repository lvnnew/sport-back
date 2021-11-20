import {Context} from '../adm/services/context';
import bcrypt from 'bcrypt';
import {BCRYPT_SALT_ROUNDS} from '../constants';
import {Role} from '../types/enums';

export const initManager = async (
  ctx: Context,
  {
    email,
    password,
    firstName,
    lastName,
    roles,
  } :
  {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    roles: Role[];
  },
) => {
  const hashedPassword = await bcrypt.hash(password, BCRYPT_SALT_ROUNDS);

  const manager = await ctx.managers.upsertAdvanced(
    {
      lastName,
      firstName,
    },
    {
      email,
      lastName,
      firstName,
      active: true,
      headOfUnit: false,
    },
  );

  await ctx.managerLogins.upsertAdvanced(
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

  await ctx.managersToRoles.createMany(roles.map(roleId => ({
    managerId: manager.id,
    roleId,
  })));
};
