/* eslint-disable sort-keys-fix/sort-keys-fix */
import {Context} from '../adm/services/context';
import bcrypt from 'bcrypt';
import {BCRYPT_SALT_ROUNDS} from '../constants';

export const initTestAdmin = async (ctx: Context) => {
  const email = 'admin@example.com';
  const testPassword = 'admin1234';
  const hashedPassword = await bcrypt.hash(testPassword, BCRYPT_SALT_ROUNDS);

  const manager = await ctx.managers.create({
    lastName: 'Test',
    firstName: 'Admin',
  });

  await ctx.managerLogins.upsertAdvansed(
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
};
