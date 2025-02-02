import type { Document } from 'mongodb';
import type { IRawUser } from './dtos';
import type { IDocumentExtensions } from './extensions';

export interface IUser extends IRawUser, IDocumentExtensions, Document {}