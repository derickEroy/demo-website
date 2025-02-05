import { BaseRepository } from '@infrastructure/repositories';
import { Chat } from '@domain/entities';
import type { Collection } from 'mongodb';
import type { IChat, IChatRepository } from '@domain/types';

export class ChatRepository extends BaseRepository<IChat, Chat> implements IChatRepository {
    constructor(collection: Collection<IChat>) {
        super(collection, Chat);
    }
}