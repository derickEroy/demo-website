import type { Collection, Document, Filter, ObjectId, OptionalUnlessRequiredId, WithId } from 'mongodb';
import type { IBaseRepository, TOptionalDocumentExtensions, BaseEntity } from '@domain';

export class BaseRepository<T extends Document, Entity extends BaseEntity<T>> implements IBaseRepository<T> {
    constructor(private _collection: Collection<T>, private _entity: new (data: TOptionalDocumentExtensions<T>) => Entity) {}

    private _toEntity(document: WithId<T>) {
        return new this._entity(document as T);
    }

    async insertOne(data: OptionalUnlessRequiredId<T>): Promise<ObjectId> {
        return (await this._collection.insertOne(data)).insertedId;
    }

    async findOne(filter: Filter<T>): Promise<Entity | null> {
        const document = await this._collection.findOne(filter);
        return document ? this._toEntity(document) : null;
    }
}