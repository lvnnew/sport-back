/* eslint-disable promise/prefer-await-to-callbacks */
import passport from 'passport';
import {NextFunction, Request, Response} from 'express';
import jwtSecret from '../config/jwtConfig';
import jwt from 'jsonwebtoken';
import {log} from '../../log';

export const register = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate('appRegister', async (error, user, info) => {
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
        log.info('user');
        log.info('user created in db');

        // res.status(200).send({cardNumber: user.memberId, message: 'user created'});
        const token = jwt.sign({id: user.id}, jwtSecret.secret, {
          expiresIn: 60 * 60,
        });
        res.status(200).send({
          auth: true,
          id: user.id,
          message: 'User created',
          token,
        });
      });
    }
  })(req, res, next);
};
