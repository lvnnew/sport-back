/* eslint-disable promise/prefer-await-to-callbacks */
import passport from 'passport';
import {NextFunction, Request, Response} from 'express';
import {log} from '../../log';

export const restorePassword = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate('appRestorePassword', async (error, user, info) => {
    if (error) {
      log.error(error);
      res.status(400).send({
        message: error.message,
      });

      return;
    }
    if (info) {
      log.error(info.message);
      res.status(403).send(info.message);
    } else {
      req.logIn(user, async () => {
        res.status(200).send({
          message: 'new password sent to email',
        });
      });
    }
  })(req, res, next);
};
