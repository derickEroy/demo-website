import type { ObjectId } from 'mongodb';

export interface IId {
    _id: ObjectId
}

export interface ITimestamps {
    createdAt: Date;
    updatedAt: Date;
}

export interface IDocumentExtensions extends IId, ITimestamps {}