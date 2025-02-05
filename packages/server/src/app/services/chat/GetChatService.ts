import { getCollection } from "@infrastructure/databases";
import { GetChatUseCase } from "@app/useCases";
import { GetChatController } from "@presentation/controllers";
import { ChatRepository } from "@infrastructure/repositories";

export const getChatService = new GetChatController(
    new GetChatUseCase(
        new ChatRepository(
            getCollection('chats')
        )
    )
);