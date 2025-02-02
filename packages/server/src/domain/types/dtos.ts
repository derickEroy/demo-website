import type { IDocumentExtensions } from './extensions';

export interface IRawUser {
    email: string;
    password: string;
}

export type ISafeUser = Omit<IRawUser, 'password'> & IDocumentExtensions;

export interface ILoginCredentials {
    email: string;
    password: string;
}