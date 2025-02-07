import type { TCause, ISchemaError } from '@domain/types';

export class SchemaError extends Error implements ISchemaError {
    constructor(
        public message: string,
        public cause: TCause
    ) { super(); }
}