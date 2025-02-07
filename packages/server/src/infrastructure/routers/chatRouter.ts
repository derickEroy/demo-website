import { Router } from 'express';
import { expressAdapter } from 'src/infrastructure/adapters/[exports]';
import { createService, getChatService } from 'src/app/services/[exports]';

export const chatRouter = Router();

chatRouter.post('/create', expressAdapter(createService));

chatRouter.get('/getChat', expressAdapter(getChatService));