import bcrypt from 'bcrypt';
import {Response} from 'express';
import log from '../../log';
import {BCRYPT_SALT_ROUNDS} from '../../constants';
import {AuthenticatedRequest} from '../../types/AuthenticatedRequest';
import {getOrCreateContext} from '../services/context';
import {getCurrentLogins} from './getCurrentLogins';

export const updatePassword = async (req: AuthenticatedRequest, res: Response) => {
  if (req.user) {
    const passwordHash = await bcrypt.hash(req.body.password, BCRYPT_SALT_ROUNDS);
    const ctx = await getOrCreateContext();
    const logins = await getCurrentLogins(ctx, req);
    for (const login of logins) {
      await ctx.managerLogins.update({
        ...login,
        passwordHash,
      });
    }

    log.info('password updated');
    res
      .status(200)
      .send({auth: true, message: 'password updated'});
  } else {
    res.status(401).send();
  }
};
