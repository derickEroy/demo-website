import { getCollection } from "@infrastructure/databases";
import { CreateChatUseCase } from "@app/useCases";
import { ChatRepository } from "@infrastructure/repositories";
import { CreateChatController } from "@presentation/controllers";

export const createService = new CreateChatController(
    new CreateChatUseCase(
        new ChatRepository(
            getCollection('chats')
        )
    )
);