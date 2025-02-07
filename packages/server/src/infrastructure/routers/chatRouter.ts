import { Router } from 'express';
import { expressAdapter } from 'src/infrastructure/adapters';
import { createService, getChatService } from 'src/app/services';

export const chatRouter = Router();

chatRouter.post('/create', expressAdapter(createService));

chatRouter.get('/getChat', expressAdapter(getChatService));