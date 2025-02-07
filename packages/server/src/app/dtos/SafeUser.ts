import { ObjectId } from 'mongodb';
import type { ISafeUser, IUser } from 'src/domain/types';

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