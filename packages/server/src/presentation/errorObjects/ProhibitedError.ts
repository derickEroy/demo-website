import type { IProhibitedError, TCredentials } from "@domain/types";

export class ProhibitedError extends Error implements IProhibitedError {
    constructor(
        public message: string,
        public credentials: TCredentials
    ) { super(); }
}