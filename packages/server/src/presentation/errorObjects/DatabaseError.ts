import type { IDatabaseError, TQuery } from "../../domain/types/errors";

export class DatabaseError extends Error implements IDatabaseError {
    constructor(
        public message: string,
        public query: TQuery
    ) { super(); }
}