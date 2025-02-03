import type { ObjectId } from 'mongodb';
import type { TRequestProps } from '@domain/types';

export interface IRequest<T extends TRequestProps> {
    body: T['body'];
    headers: T['headers'];
    query: T['query'];
    params: T['params'];
}

export interface ISessionData {
    userId: ObjectId;
}

export interface IResponse<T> {
    httpCode: number;
    body?: T;
    sessionData?: ISessionData;
}