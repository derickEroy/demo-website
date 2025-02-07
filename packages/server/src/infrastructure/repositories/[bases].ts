import type { Collection, Document, Filter, ObjectId, OptionalUnlessRequiredId, WithId } from 'mongodb';
import type { IBaseRepository } from 'src/domain/types/[exports]';
import type { BaseEntity } from 'src/domain/entities/[exports]';

export class BaseRepository<T extends Document, Entity extends BaseEntity<T>> implements IBaseRepository<T, Entity> {
    constructor(private _collection: Collection<T>, private _entity: new (data: WithId<T>) => Entity) {}

    private _toEntity(document: WithId<T>) {
        return new this._entity(document);
    }

    async insertOne(data: OptionalUnlessRequiredId<T>): Promise<ObjectId> {
        return (await this._collection.insertOne(data)).insertedId;
    }

    async findOne(filter: Filter<T>): Promise<Entity | null> {
        const document = await this._collection.findOne(filter);
        return document ? this._toEntity(document) : null;
    }

    async findMany(filter: Filter<T>): Promise<Entity[]> {
        const documents = await this._collection.find(filter).toArray();
        return documents.map((document) => this._toEntity(document));
    }
}