import type { ObjectId } from 'mongodb';
import type { IDocumentExtensions } from 'src/domain/types';

export interface IRawUser {
    email: string;
    password: string;
}

export type ISafeUser = Omit<IRawUser, 'password'> & IDocumentExtensions;

export interface ILoginCredentials {
    email: string;
    password: string;
}

export interface IUserQuery extends ISafeUser {};

export interface IRawChat {
    participants: ObjectId[];
}