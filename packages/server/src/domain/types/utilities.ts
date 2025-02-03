import type { IDocumentExtensions } from '@domain/types';

export type TOptionalDocumentExtensions<T> = Omit<T, keyof IDocumentExtensions> & Partial<IDocumentExtensions>;