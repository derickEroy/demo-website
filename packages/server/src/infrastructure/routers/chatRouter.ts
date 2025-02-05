import { Router } from 'express';
import { expressAdapter } from '@infrastructure/adapters';
import { createChatService } from '@app/services';

export const chatRouter = Router();

chatRouter.post('/create', expressAdapter(createChatService));