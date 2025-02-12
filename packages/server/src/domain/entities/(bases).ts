import { ZodSchema } from 'zod';
import { ObjectId } from 'mongodb';
import { SchemaError } from '@presentation/errorObjects';
import type { IDocumentExtensions, TCause } from '@domain/types';

export class BaseEntity<T extends Record<string, any>> {
    _id: ObjectId;
    createdAt: Date;
    updatedAt: Date;

    constructor(exts: Partial<IDocumentExtensions>, private _schema: ZodSchema<T>) {
        this._id = exts._id ?? new ObjectId();
        this.createdAt = exts.createdAt ?? new Date();
        this.updatedAt = exts.updatedAt ?? new Date();

        Object.defineProperty(this, '_schema', { enumerable: false });
    }

    validate(data: T) {
        const { error } = this._schema.safeParse(data);

        if (error) {
            const cause: TCause = {};

            error.issues.forEach((issue) => {
                const key = issue.path.join('.');
                const value = issue.path.reduce((acc: any, cur) => acc[cur], data);
                cause[key] = typeof value === 'object' ? JSON.stringify(value) : String(value);
            })

            throw new SchemaError(
                `Invalid ${this.constructor.name} document data`,
                cause
            );
        }
    }

    toObject() {
        return { ...this };
    }
}