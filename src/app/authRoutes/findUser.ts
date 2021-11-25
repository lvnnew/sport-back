import {Response} from 'express';
import {getOrCreateContext} from '../../adm/services/context';
import log from '../../log';
import {AuthenticatedRequest} from '../../types/AuthenticatedRequest';
import {getCurrentUser} from './getCurrentUser';

export const findUser = async (req: AuthenticatedRequest, res: Response) => {
  log.info(req.user);
  if (req.user) {
    const ctx = await getOrCreateContext();
    const user = await getCurrentUser(ctx, req);
    if (!user) {
      throw new Error('User not found');
    }
    res.status(200).send({
      auth: true,
      firstname: user.firstname,
      lastname: user.lastname,
      email: req.user.id,
      message: 'user found in db',
    });
  } else {
    log.error('There is no user field in request');
    res.status(401).send();
  }
};
