/* eslint-disable sort-keys-fix/sort-keys-fix */
import {Response} from 'express';
import {getAloyalContext} from '../../aloyal/services/context';
import {log} from '../../log';
import {AuthenticatedRequest} from '../../types/AuthenticatedRequest';

export const updateUser = async (req: AuthenticatedRequest, res: Response) => {
  if (req.user) {
    const ctx = await getAloyalContext();
    const currentUser = await ctx.members.get(req.user.id);
    if (!currentUser) {
      throw new Error(`There is no member with "${req.user.id}" id`);
    }
    await ctx.members.update({
      ...currentUser,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
    });
    log.info('user updated');
    res.status(200).send({auth: true, message: 'user updated'});
  } else {
    res.status(401).send();
  }
};
