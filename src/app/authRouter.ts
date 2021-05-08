import {Router} from 'express';
import passport from 'passport';
import {register} from './authRoutes/register';
import {login} from './authRoutes/login';
import {findUser} from './authRoutes/findUser';
import {updatePassword} from './authRoutes/updatePassword';
import {updateUser} from './authRoutes/updateUser';
import {transferFromOldSystem} from './authRoutes/transferFromOldSystem';
import {restorePassword} from './authRoutes/restorePassword';

const appAuthRouter = Router();
appAuthRouter.post('/register', register);
appAuthRouter.post('/transferFromOldSystem', transferFromOldSystem);
appAuthRouter.post('/restorePassword', restorePassword);
appAuthRouter.post('/login', login);

appAuthRouter.get('/findUser', passport.authenticate('appJwt', {session: false}), findUser as any);
appAuthRouter.put('/updatePassword', passport.authenticate('appJwt', {session: false}), updatePassword as any);
appAuthRouter.put('/updateUser', passport.authenticate('appJwt', {session: false}), updateUser as any);

export default appAuthRouter;
