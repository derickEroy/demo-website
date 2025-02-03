import type { Document } from 'mongodb';
import type { IRawUser, IDocumentExtensions } from '@domain/types';

export interface IUser extends IRawUser, IDocumentExtensions, Document {}