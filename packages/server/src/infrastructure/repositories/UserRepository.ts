import { BaseRepository } from 'src/infrastructure/repositories';
import { User } from 'src/domain/entities';
import type { Collection } from 'mongodb';
import type { IUser, IUserRepository } from 'src/domain/types';

export class UserRepository extends BaseRepository<IUser, User> implements IUserRepository {
    constructor(collection: Collection<IUser>) {
        super(collection, User);
    }

    async findByEmail(email: string): Promise<User | null> {
        return await this.findOne({ email });
    }
}