import { ObjectId } from "mongodb";
import { DatabaseError } from "@presentation/errorObjects";
import type { IChat, IChatRepository, TGetChatUseCase } from "@domain/types";

export class GetChatUseCase implements TGetChatUseCase {
    constructor(private _chatRepository: IChatRepository) {}

    async execute(data: IChat) {
        if ('_id' in data) {
            data._id = new ObjectId(data._id);
        }

        if ('participants' in data) {
            data.participants = data.participants.map((id) => (
                new ObjectId(id)
            ));
        }

        const document = await this._chatRepository.findOne(data);

        if (!document) {
            throw new DatabaseError('Chat does not exist', data);
        }

        return document;
    }
}