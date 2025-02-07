import { Router } from 'express';
import { expressAdapter } from 'src/infrastructure/adapters';
import { registerService, loginService, getUsersService } from 'src/app/services';

export const userRouter = Router();

userRouter.get('/getUsers', expressAdapter(getUsersService));

userRouter.post('/register', expressAdapter(registerService));

userRouter.post('/login', expressAdapter(loginService));