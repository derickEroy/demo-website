import type { TCause, ISchemaError } from 'src/domain/types/[exports]';

export class SchemaError extends Error implements ISchemaError {
    constructor(
        public message: string,
        public cause: TCause
    ) { super(); }
}