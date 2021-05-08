/* eslint-disable sort-keys-fix/sort-keys-fix */
import {AgrContext} from '../agr/services/context';
import bcrypt from 'bcrypt';
import {BCRYPT_SALT_ROUNDS} from '../constants';

export const initTestUser = async (ctx: AgrContext) => {
  const email = 'demo';
  const hashedPassword = await bcrypt.hash(email, BCRYPT_SALT_ROUNDS);

  await ctx.adminLogins.create({
    login: email,
    passwordHash: hashedPassword,
    role: '',
    emailVerified: true,
    initialPasswordChanged: true,
    locked: false,
  });
};
