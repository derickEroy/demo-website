import type { ObjectId } from 'mongodb';

export interface TRequestProps {
    body?: unknown;
    headers?: unknown;
    query?: unknown;
    params?: unknown
}

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