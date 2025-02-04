import type { IRawChat, IChatRepository } from "@domain/types";
import { Chat } from "src/domain/entities/Chat";

export class CreateChatUseCase {
    constructor(private _userRepository: IChatRepository) {}

    async execute(data: IRawChat) {
        const chatEntity = new Chat(data);
        
        const chat = chatEntity.toObject();

        await this._userRepository.insertOne(chat);

        return chat;
    }
}