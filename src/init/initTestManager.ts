import {Context} from '../adm/services/context';
import bcrypt from 'bcrypt';
import {BCRYPT_SALT_ROUNDS} from '../constants';

export const initTestManager = async (ctx: Context) => {
  const email = 'manager@example.com';
  const testPassword = 'manager1234';
  const hashedPassword = await bcrypt.hash(testPassword, BCRYPT_SALT_ROUNDS);

  const manager = await ctx.managers.create({
    lastName: 'Test',
    firstName: 'Manager',
  });

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

  await ctx.managersToRoles.createMany([{
    manageId: manager.id,
    roleId: 'manager',
  }]);
};
