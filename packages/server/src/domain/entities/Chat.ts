import { BaseEntity } from "src/domain/entities";
import { chatSchema } from "src/infrastructure/validators";
import { ObjectId } from "mongodb";
import type { IChat, IDocumentExtensions, IRawChat } from "src/domain/types";

export class Chat extends BaseEntity<IChat> {
    participants: ObjectId[];

    constructor(data: IRawChat & Partial<IDocumentExtensions>) {
        super(data, chatSchema);

        this.participants = data.participants.map((id) => {
            return typeof id === 'string' ? new ObjectId(id as string) : id;
        });

        this.validate();
    }

    validate() {
        super.validate(this.toObject());
    }
}