import passport from 'passport';
import {NextFunction, Request, Response} from 'express';
import jwt from 'jsonwebtoken';
import AppErrorCode from '../../types/AppErrorCode';
import log from '../../log';
import {ADM_TOKEN_EXPIRES_IN} from '../config/consts';
import {getConfig} from '../../config';

export const register = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate('admRegister', async (error, user, info) => {
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

        const {admJwtSecret} = await getConfig();
        if (!admJwtSecret) {
          throw new Error('admJwtSecret not provided');
        }

        // res.status(200).send({cardNumber: user.memberId, message: 'user created'});
        const token = jwt.sign({id: user.id}, admJwtSecret, {
          expiresIn: ADM_TOKEN_EXPIRES_IN,
        });
        res.status(200).send({
          auth: true,
          id: user.id,
          fullName: user.fullName,
          message: 'User created',
          token,
        });
      });
    }
  })(req, res, next);
};
