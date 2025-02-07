import { getCollection } from "src/infrastructure/databases";
import { GetChatUseCase } from "src/app/useCases";
import { GetChatController } from "src/presentation/controllers";
import { ChatRepository } from "src/infrastructure/repositories";

export const getChatService = new GetChatController(
    new GetChatUseCase(
        new ChatRepository(
            getCollection('chats')
        )
    )
);