import type { ILoginCredentials, IRawUser, ISafeUser } from '@domain/types';

export interface IUseCase<T, U> {
    execute(data: T): Promise<U>;
}

export type TUserRegisterUseCase = IUseCase<IRawUser, ISafeUser>;

export type TUserLoginUseCase = IUseCase<ILoginCredentials, ISafeUser>;