import { Router } from 'express';
import { expressAdapter } from '../adapters/express';
import { userRegisterService } from '@app/services';
import { userLoginService } from '@app/services';

export const userRouter = Router();

userRouter.post('/register', expressAdapter(userRegisterService));

userRouter.post('/login', expressAdapter(userLoginService));