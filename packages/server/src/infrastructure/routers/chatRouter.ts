import { Router } from 'express';
import { expressAdapter } from '@infrastructure/adapters';
import { createService } from '@app/services';
import { getChatService } from 'src/app/services/chat/GetChatService';

export const chatRouter = Router();

chatRouter.post('/create', expressAdapter(createService));

chatRouter.get('/getChat', expressAdapter(getChatService));