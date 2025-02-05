import { Router } from 'express';
import { expressAdapter } from '@infrastructure/adapters';
import { createChatService } from '@app/services';
import { getChatService } from 'src/app/services/chat/GetChatService';

export const chatRouter = Router();

chatRouter.post('/create', expressAdapter(createChatService));

chatRouter.get('/getChat', expressAdapter(getChatService));