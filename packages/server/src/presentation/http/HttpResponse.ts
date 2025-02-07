import { DatabaseError, SchemaError, ProhibitedError, InternalError } from 'src/presentation/errorObjects';
import type { IResponse, ISessionData, TQuery, TCause, TCredentials } from 'src/domain/types';

export class HttpResponse<T> implements IResponse<T> {
    httpCode: number;
    body?: T | undefined;
    sessionData?: ISessionData | undefined;

    constructor(data: IResponse<T>) {
        this.httpCode = data.httpCode;
        this.body = data.body;
        this.sessionData = data.sessionData;
    }

    static databaseError(httpCode: number, message: string, query: TQuery) {
        return new this({ httpCode, body: new DatabaseError(message, query) });
    }

    static prohibitedError(httpCode: number, message: string, credentials: TCredentials) {
        return new this({ httpCode, body: new ProhibitedError(message, credentials) });
    }

    static schemaError(httpCode: number, message: string, cause: TCause) {
        return new this({ httpCode, body: new SchemaError(message, cause) });
    }

    static internalError(message: string) {
        return new this({ httpCode: 500, body: new InternalError(message) });
    }
}