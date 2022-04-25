import passport from 'passport';
import {NextFunction, Request, Response} from 'express';
import jwt from 'jsonwebtoken';
import {AppErrorCode} from '../../types/enums';
import log from '../../log';
import {APP_TOKEN_EXPIRES_IN} from '../config/consts';
import {getConfig} from '../../config';

export const registerUser = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate('register', async (error, user, info) => {
    if (error) {
      log.error(error);
      res.status(400).send({
        message: AppErrorCode.ErrorOccurred,
      });

      return;
    }

    if (info) {
      log.error(info.message);
      res.status(403).send(info.message);
    } else {
      req.logIn(user, async () => {
        log.info('user');
        log.info('user created in db');
        const {appJwtSecret} = await getConfig();
        if (!appJwtSecret) {
          throw new Error('appJwtSecret not proovided');
        }

        // res.status(200).send({email: user.userId, message: 'user created'});
        const token = jwt.sign({id: user.id}, appJwtSecret, {
          expiresIn: APP_TOKEN_EXPIRES_IN,
        });
        res.status(200).send({
          auth: true,
          id: user.id,
          fullName: user.fullName,
          message: 'user created',
          token,
        });
      });
    }
  })(req, res, next);
};
