import type { Document } from 'mongodb';
import type { IRawUser, IDocumentExtensions, IRawChat } from 'src/domain/types/[exports]';

export interface IUser extends IRawUser, IDocumentExtensions, Document {}

export interface IChat extends IRawChat, IDocumentExtensions, Document {}