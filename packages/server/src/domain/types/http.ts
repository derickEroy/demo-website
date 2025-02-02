import type { ObjectId } from 'mongodb';

export interface IRequest<
    Body = unknown,
    Headers = unknown,
    Query = unknown,
    Params = unknown
> {
    body: Body;
    headers: Headers;
    query: Query;
    params: Params;
}

export interface ISessionData {
    userId: ObjectId;
}

export interface IResponse<T> {
    httpCode: number;
    body?: T;
    sessionData?: ISessionData;
}