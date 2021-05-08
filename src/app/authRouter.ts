import {Router} from 'express';
import passport from 'passport';
import {register} from './authRoutes/register';
import {login} from './authRoutes/login';
import {updatePassword} from './authRoutes/updatePassword';
import {transferFromOldSystem} from './authRoutes/transferFromOldSystem';
import {restorePassword} from './authRoutes/restorePassword';

const appAuthRouter = Router();
appAuthRouter.post('/register', register);
appAuthRouter.post('/transferFromOldSystem', transferFromOldSystem);
appAuthRouter.post('/restorePassword', restorePassword);
appAuthRouter.post('/login', login);

appAuthRouter.put('/updatePassword', passport.authenticate('appJwt', {session: false}), updatePassword as any);

export default appAuthRouter;
