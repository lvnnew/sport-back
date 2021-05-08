import {Router} from 'express';
import passport from 'passport';
import {register} from './authRoutes/register';
import {login} from './authRoutes/login';
import {updatePassword} from './authRoutes/updatePassword';

const admAuthRouter = Router();
admAuthRouter.post('/register', register);
admAuthRouter.post('/login', login);

admAuthRouter.put('/updatePassword', passport.authenticate('admJwt', {session: false}), updatePassword as any);

export default admAuthRouter;
