import { BaseRepository } from './_bases';
import { User } from '../../domain/entities/User';
import type { Collection } from 'mongodb';
import type { IUser } from '../../domain/types/documents';
import type { IUserRepository } from '../../domain/types/repositories';

export class UserRepository extends BaseRepository<IUser, User> implements IUserRepository {
    constructor(collection: Collection<IUser>) {
        super(collection, User);
    }

    async findByEmail(email: string): Promise<User | null> {
        return await this.findOne({ email });
    }
}