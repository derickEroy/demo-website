import type { IInternalError } from "src/domain/types";

export class InternalError extends Error implements IInternalError {
    constructor(public message: string) { super(); }
}