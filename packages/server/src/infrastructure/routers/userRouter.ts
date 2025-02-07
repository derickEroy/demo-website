import { Router } from 'express';
import { expressAdapter } from 'src/infrastructure/adapters/[exports]';
import { registerService, loginService, getUsersService } from 'src/app/services/[exports]';

export const userRouter = Router();

userRouter.get('/getUsers', expressAdapter(getUsersService));

userRouter.post('/register', expressAdapter(registerService));

userRouter.post('/login', expressAdapter(loginService));