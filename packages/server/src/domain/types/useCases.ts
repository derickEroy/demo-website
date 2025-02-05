import type { IChat, ILoginCredentials, IRawChat, IRawUser, ISafeUser, TUserSearchDetails } from '@domain/types';

export interface IUseCase<T, U> {
    execute(data: T): Promise<U>;
}

export type TUserRegisterUseCase = IUseCase<IRawUser, ISafeUser>;

export type TUserLoginUseCase = IUseCase<ILoginCredentials, ISafeUser>;

export type TGetUsersUseCase = IUseCase<TUserSearchDetails,  ISafeUser[]>;

export type TCreateChatUseCase = IUseCase<IRawChat, IChat>;