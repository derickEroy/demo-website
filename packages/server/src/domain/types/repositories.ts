import { BaseEntity } from '../entities/_bases';
import { User } from '../entities/User';
import type { Filter, ObjectId, OptionalUnlessRequiredId } from 'mongodb';
import type { IUser } from './documents';

export interface IBaseRepository<T extends Record<string, any>> {
    insertOne(data: OptionalUnlessRequiredId<T>): Promise<ObjectId>;
    findOne(filter: Filter<T>): Promise<BaseEntity<T> | null>;
}

export interface IUserRepository extends IBaseRepository<IUser> {
    findByEmail(email: string): Promise<User | null>
}