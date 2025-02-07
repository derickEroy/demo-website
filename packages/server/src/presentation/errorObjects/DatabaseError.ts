import type { IDatabaseError, TQuery } from "src/domain/types";

export class DatabaseError extends Error implements IDatabaseError {
    constructor(
        public message: string,
        public query: TQuery
    ) { super(); }
}