import type { IProhibitedError, TCredentials } from "src/domain/types/[exports]";

export class ProhibitedError extends Error implements IProhibitedError {
    constructor(
        public message: string,
        public credentials: TCredentials
    ) { super(); }
}