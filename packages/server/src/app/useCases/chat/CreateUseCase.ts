import { Chat } from "@domain/entities";
import type { IRawChat, IChatRepository } from "@domain/types";

export class CreateChatUseCase {
    constructor(private _userRepository: IChatRepository) {}

    async execute(data: IRawChat) {
        const chatEntity = new Chat(data);
        
        const chat = chatEntity.toObject();

        await this._userRepository.insertOne(chat);

        return chat;
    }
}