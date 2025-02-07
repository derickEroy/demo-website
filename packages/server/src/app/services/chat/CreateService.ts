import { getCollection } from "src/infrastructure/databases";
import { CreateChatUseCase } from "src/app/useCases";
import { ChatRepository } from "src/infrastructure/repositories";
import { CreateChatController } from "src/presentation/controllers";

export const createService = new CreateChatController(
    new CreateChatUseCase(
        new ChatRepository(
            getCollection('chats')
        )
    )
);