import type { IDocumentExtensions } from '@domain/types';
import { Request } from 'express';

export type TOptionalDocumentExtensions<T> = Omit<T, keyof IDocumentExtensions> & Partial<IDocumentExtensions>;

export interface TRequestProps {
    body?: unknown;
    headers?: unknown;
    query?: unknown;
    params?: unknown
}