export type TCause = Record<string, string>;

export type TQuery = Record<string, any>;

export type TCredentials = string[];

export interface IErrorProperties {
    message: string;
}

export interface IError extends ISchemaError, IDatabaseError, IProhibitedError, IInternalError {}

export interface ISchemaError extends IErrorProperties {
    cause: TCause;
}

export interface IDatabaseError extends IErrorProperties {
    query: TQuery;
}

export interface IProhibitedError extends IErrorProperties {
    credentials: TCredentials;
}

export interface IInternalError extends IErrorProperties {}