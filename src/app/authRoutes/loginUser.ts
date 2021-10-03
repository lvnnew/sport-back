/* eslint-disable promise/prefer-await-to-callbacks */
import jwt from 'jsonwebtoken';
import passport from 'passport';
import jwtSecret from '../config/jwtConfig';
import {NextFunction, Request, Response} from 'express';
import {log} from '../../log';

export const loginUser = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate('login', async (error, user, info) => {
    log.warn(user);
    if (error) {
      log.error(error);
      res.status(400).send({
        message: error.message,
      });

      return;
    }
    if (info) {
      log.error(info.message);
      if (info.message === 'bad email') {
        res.status(401).send(info.message);
      } else {
        res.status(403).send(info.message);
      }
    } else if (user && user.id) {
      req.logIn(user, async () => {
        log.warn(user);
        log.warn(user.id);
        const token = jwt.sign({id: user.id}, jwtSecret.secret, {
          expiresIn: 60 * 60,
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
