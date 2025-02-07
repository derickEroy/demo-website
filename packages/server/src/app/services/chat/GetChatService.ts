import { getCollection } from "src/infrastructure/databases/[exports]";
import { GetChatUseCase } from "src/app/useCases/[exports]";
import { GetChatController } from "src/presentation/controllers/[exports]";
import { ChatRepository } from "src/infrastructure/repositories/[exports]";

export const getChatService = new GetChatController(
    new GetChatUseCase(
        new ChatRepository(
            getCollection('chats')
        )
    )
);