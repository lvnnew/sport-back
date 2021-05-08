/* eslint-disable sort-keys-fix/sort-keys-fix */
import {Response} from 'express';
import {getAgrContext} from '../../agr/services/context';
import {log} from '../../log';
import {AuthenticatedRequest} from '../../types/AuthenticatedRequest';

export const updateUser = async (req: AuthenticatedRequest, res: Response) => {
  if (req.user) {
    const ctx = await getAgrContext();
    await ctx.users.update({
      id: req.user.id,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
    });
    log.info('user updated');
    res.status(200).send({auth: true, message: 'user updated'});
  } else {
    res.status(401).send();
  }
};
