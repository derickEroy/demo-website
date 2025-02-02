import { Router } from 'express';
import { expressAdapter } from '../adapters/express';
import { userRegisterService } from '../../application/services/user/RegisterService';
import { userLoginService } from '../../application/services/user/LoginService';

export const userRouter = Router();

userRouter.post('/register', expressAdapter(userRegisterService));

userRouter.post('/login', expressAdapter(userLoginService));