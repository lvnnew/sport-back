import {Router} from 'express';
import passport from 'passport';
import {register} from './authRoutes/register';
import {login} from './authRoutes/login';
import {findUser} from './authRoutes/findUser';
import {updatePassword} from './authRoutes/updatePassword';
import {updateUser} from './authRoutes/updateUser';

const admAuthRouter = Router();
admAuthRouter.post('/register', register);
admAuthRouter.post('/login', login);

admAuthRouter.get('/findUser', passport.authenticate('admJwt', {session: false}), findUser as any);
admAuthRouter.put('/updatePassword', passport.authenticate('admJwt', {session: false}), updatePassword as any);
admAuthRouter.put('/updateUser', passport.authenticate('admJwt', {session: false}), updateUser as any);

export default admAuthRouter;
