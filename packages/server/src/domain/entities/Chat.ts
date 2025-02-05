import { BaseEntity } from "@domain/entities";
import { chatSchema } from "@infrastructure/validators";
import type { ObjectId } from "mongodb";
import type { IChat, IDocumentExtensions, IRawChat } from "@domain/types";

export class Chat extends BaseEntity<IChat> {
    participants: ObjectId[];

    constructor(data: IRawChat & Partial<IDocumentExtensions>) {
        super(data, chatSchema);

        this.participants = data.participants;

        this.validate();
    }

    validate() {
        super.validate(this.toObject());
    }

    toObject() {
        return { ...this };
    }
}