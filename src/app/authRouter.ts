import {Router} from 'express';
import passport from 'passport';
import {registerUser} from './authRoutes/registerUser';
import {loginUser} from './authRoutes/loginUser';
import {findUser} from './authRoutes/findUser';
import {updatePassword} from './authRoutes/updatePassword';
import {updateUser} from './authRoutes/updateUser';

const authRouter: Router = Router();
authRouter.post('/registerUser', registerUser);
authRouter.post('/loginUser', loginUser);

authRouter.get('/findUser', passport.authenticate('jwt', {session: false}), findUser as any);
authRouter.put('/updatePassword', passport.authenticate('jwt', {session: false}), updatePassword as any);
authRouter.put('/updateUser', passport.authenticate('jwt', {session: false}), updateUser as any);

export default authRouter;
