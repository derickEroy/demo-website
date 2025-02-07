import type { IInternalError } from "@domain/types";

export class InternalError extends Error implements IInternalError {
    constructor(public message: string) { super(); }
}