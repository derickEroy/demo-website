import { Router } from 'express';
import { expressAdapter } from '@infrastructure/adapters';
import { createService, getChatService } from '@app/services';

export const chatRouter = Router();

chatRouter.post('/create', expressAdapter(createService));

chatRouter.get('/getChat', expressAdapter(getChatService));