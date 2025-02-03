import type { IRequest } from '@domain/types';

export class HttpRequest<
    Body = unknown,
    Headers = unknown,
    Query = unknown,
    Params = unknown
> implements IRequest<Body, Headers, Query, Params> {
    body: Body;
    headers: Headers;
    query: Query;
    params: Params;

    constructor(data: IRequest<Body, Headers, Query, Params>) {
        this.body = data.body;
        this.headers = data.headers;
        this.query = data.query;
        this.params = data.params
    }
}
