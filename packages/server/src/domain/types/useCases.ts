import type { IChat, ILoginCredentials, IRawChat, IRawUser, ISafeUser, IUserQuery } from 'src/domain/types/[exports]';

export interface IUseCase<T, U> {
    execute(data: T): Promise<U>;
}

export type TUserRegisterUseCase = IUseCase<IRawUser, ISafeUser>;

export type TUserLoginUseCase = IUseCase<ILoginCredentials, ISafeUser>;

export type TGetUsersUseCase = IUseCase<IUserQuery,  ISafeUser[]>;

export type TCreateChatUseCase = IUseCase<IRawChat, IChat>;

export type TGetChatUseCase = IUseCase<IChat, IChat>;