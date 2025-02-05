import { Chat } from "@domain/entities";
import type { IRawChat, IChatRepository } from "@domain/types";

export class CreateChatUseCase {
    constructor(private _chatRepository: IChatRepository) {}

    async execute(data: IRawChat) {
        const chatEntity = new Chat(data);
        
        const chat = chatEntity.toObject();

        await this._chatRepository.insertOne(chat);

        return chat;
    }
}