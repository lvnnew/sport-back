/* eslint-disable sort-keys-fix/sort-keys-fix */
import {Response} from 'express';
import {getAloyalContext} from '../../aloyal/services/context';
import {log} from '../../log';
import {AuthenticatedRequest} from '../../types/AuthenticatedRequest';
import {getCurrentMember} from './getCurrentMember';

export const findUser = async (req: AuthenticatedRequest, res: Response) => {
  log.info(req.user);
  if (req.user) {
    const ctx = await getAloyalContext();
    const member = await getCurrentMember(ctx, req);
    if (!member) {
      throw new Error('User not found');
    }
    res.status(200).send({
      auth: true,
      firstname: member.firstname,
      lastname: member.lastname,
      cardNumber: req.user.id,
      message: 'user found in db',
    });
  } else {
    log.error('There is no user field in request');
    res.status(401).send();
  }
};
