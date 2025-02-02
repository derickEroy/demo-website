import type { IDocumentExtensions } from './extensions';

export type TOptionalDocumentExtensions<T> = Omit<T, keyof IDocumentExtensions> & Partial<IDocumentExtensions>;