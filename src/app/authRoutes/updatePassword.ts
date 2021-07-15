import bcrypt from 'bcrypt';
import {Response} from 'express';
import {log} from '../../log';
import {BCRYPT_SALT_ROUNDS} from '../../constants';
import {AuthenticatedRequest} from '../../types/AuthenticatedRequest';
import {getOrCreateContext} from '../../adm/services/context';
import {getCurrentLogin} from './getCurrentLogin';

export const updatePassword = async (req: AuthenticatedRequest, res: Response) => {
  if (req.user) {
    const passwordHash = await bcrypt.hash(req.body.password, BCRYPT_SALT_ROUNDS);
    const ctx = await getOrCreateContext();
    const login = await getCurrentLogin(ctx, req);
    await ctx.appLogins.update({
      ...login,
      passwordHash,
    });
    log.info('password updated');
    res
      .status(200)
      .send({auth: true, message: 'password updated'});
  } else {
    res.status(401).send();
  }
};
