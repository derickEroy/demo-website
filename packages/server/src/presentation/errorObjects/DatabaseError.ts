import type { IDatabaseError, TQuery } from "@domain/types";

export class DatabaseError extends Error implements IDatabaseError {
    constructor(
        public message: string,
        public query: TQuery
    ) { super(); }
}