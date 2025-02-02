import { ObjectId } from 'mongodb';
import type { ISafeUser } from '../../domain/types/dtos';
import type { IUser } from '../../domain/types/documents';

export class SafeUser implements ISafeUser {
    _id: ObjectId;
    email: string;
    createdAt: Date;
    updatedAt: Date;

    constructor(data: IUser) {
        this._id = data._id;
        this.email = data.email;
        this.createdAt = data.createdAt;
        this.updatedAt = data.updatedAt;
    }
}