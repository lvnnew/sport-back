import jwt from 'jsonwebtoken';
import passport from 'passport';
import {NextFunction, Request, Response} from 'express';
import {AppErrorCode} from '../../types/enums';
import log from '../../log';
import {ADM_TOKEN_EXPIRES_IN} from '../config/consts';
import {getConfig} from '../../config';

export const login = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate('admLogin', async (error, user, info) => {
    log.warn(user);
    if (error) {
      log.error(error);
      res.status(400).send({
        message: AppErrorCode.ErrorOccurred,
      });

      return;
    }

    if (info) {
      log.error(info.message);
      if (info.message === 'bad cardNumber') {
        res.status(401).send({message: info.message});
      } else {
        res.status(403).send({message: info.message});
      }
    } else if (user && user.id) {
      req.logIn(user, async () => {
        log.warn(user);
        log.warn(user.id);

        const {admJwtSecret} = await getConfig();
        if (!admJwtSecret) {
          throw new Error('admJwtSecret is not provided');
        }

        const token = jwt.sign({id: user.id}, admJwtSecret, {
          expiresIn: ADM_TOKEN_EXPIRES_IN,
        });
        res.status(200).send({
          auth: true,
          id: user.id,
          fullName: user.fullName,
          token,
          message: 'user found & logged in',
        });
      });
    } else {
      log.error('There is no user or user id');
      res.status(401).send();
    }
  })(req, res, next);
};
