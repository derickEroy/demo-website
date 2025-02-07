import { Chat } from "src/domain/entities/[exports]";
import type { IRawChat, IChatRepository, TGetChatUseCase } from "src/domain/types/[exports]";

export class CreateChatUseCase implements TGetChatUseCase {
    constructor(private _chatRepository: IChatRepository) {}

    async execute(data: IRawChat) {
        const chatEntity = new Chat(data);
        
        const chat = chatEntity.toObject();

        await this._chatRepository.insertOne(chat);

        return chat;
    }
}