import {Context} from '../adm/services/types';
import bcrypt from 'bcrypt';
import {BCRYPT_SALT_ROUNDS} from '../constants';
import Role from '../types/Role';
import ManagerLoginType from '../types/ManagerLoginType';
import {AdmKeycloak} from '../clients/keycloak/getAdmKeycloak';

const initManager = async (
  ctx: Context,
  keycloak: AdmKeycloak,
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

  const preparedEmail = email.toLowerCase();

  const manager = await ctx.service('managers').upsertAdvanced(
    {
      email: preparedEmail,
      lastName,
      firstName,
    },
    {
      email: preparedEmail,
      lastName,
      firstName,
    },
  );

  const managerLogin = await ctx.service('managerLogins').upsertAdvanced(
    {
      login: login ?? preparedEmail,
    },
    {
      login: login ?? preparedEmail,
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

  await keycloak.createOrUpdateUser(
    {
      username: login ?? preparedEmail,
      email: preparedEmail,
      password,
      firstName,
      lastName,
    },
  );

  return {
    manager,
    managerLogin,
  };
};

export default initManager;
