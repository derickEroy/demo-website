import { BaseEntity, User } from '@domain/entities';
import type { Filter, ObjectId, OptionalUnlessRequiredId } from 'mongodb';
import type { IUser } from '@domain/types';

export interface IBaseRepository<T extends Record<string, any>, Entity extends BaseEntity<T>> {
    insertOne(data: OptionalUnlessRequiredId<T>): Promise<ObjectId>;
    findOne(filter: Filter<T>): Promise<Entity | null>;
    findMany(filter: Filter<T>): Promise<Entity[]>;
}

export interface IUserRepository extends IBaseRepository<IUser, User> {
    findByEmail(email: string): Promise<User | null>
}