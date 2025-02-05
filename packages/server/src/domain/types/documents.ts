import type { Document } from 'mongodb';
import type { IRawUser, IDocumentExtensions, IRawChat } from '@domain/types';

export interface IUser extends IRawUser, IDocumentExtensions, Document {}

export interface IChat extends IRawChat, IDocumentExtensions, Document {}