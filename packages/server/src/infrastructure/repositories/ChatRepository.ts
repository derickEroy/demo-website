import { BaseRepository } from 'src/infrastructure/repositories';
import { Chat } from 'src/domain/entities';
import type { Collection } from 'mongodb';
import type { IChat, IChatRepository } from 'src/domain/types';

export class ChatRepository extends BaseRepository<IChat, Chat> implements IChatRepository {
    constructor(collection: Collection<IChat>) {
        super(collection, Chat);
    }
}