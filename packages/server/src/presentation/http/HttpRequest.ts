import type { IRequest, TRequestProps } from '@domain/types';

export class HttpRequest<T extends TRequestProps> implements IRequest<T> {
    body: T['body'];
    headers: T['headers'];
    query: T['query'];
    params: T['params'];

    constructor(data: IRequest<T>) {
        this.body = data.body;
        this.headers = data.headers;
        this.query = data.query;
        this.params = data.params;
    }
}