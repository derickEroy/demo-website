import { getCollection } from "src/infrastructure/databases/[exports]";
import { CreateChatUseCase } from "src/app/useCases/[exports]";
import { ChatRepository } from "src/infrastructure/repositories/[exports]";
import { CreateChatController } from "src/presentation/controllers/[exports]";

export const createService = new CreateChatController(
    new CreateChatUseCase(
        new ChatRepository(
            getCollection('chats')
        )
    )
);