import type { TCause, ISchemaError } from '../../domain/types/errors';

export class SchemaError extends Error implements ISchemaError {
    constructor(
        public message: string,
        public cause: TCause
    ) { super(); }
}