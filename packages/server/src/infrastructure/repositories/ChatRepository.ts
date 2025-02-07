import { BaseRepository } from 'src/infrastructure/repositories/[exports]';
import { Chat } from 'src/domain/entities/[exports]';
import type { Collection } from 'mongodb';
import type { IChat, IChatRepository } from 'src/domain/types/[exports]';

export class ChatRepository extends BaseRepository<IChat, Chat> implements IChatRepository {
    constructor(collection: Collection<IChat>) {
        super(collection, Chat);
    }
}