import type { HttpRequest, HttpResponse } from "src/presentation/http";
import type { ILoginCredentials, IRawUser, ISafeUser, IDatabaseError, IInternalError, IUserQuery, TRequestProps, IRawChat, IChat } from "src/domain/types"

export interface IController<T extends TRequestProps, U> {
    execute(data: HttpRequest<T>): Promise<HttpResponse<U | IInternalError>>;
}

export type TUserRegisterController = IController<{ body: IRawUser }, ISafeUser | IDatabaseError>;

export type TUserLoginController = IController<{ body: ILoginCredentials }, ISafeUser | IDatabaseError>;

export type TGetUsersController = IController<{ query: IUserQuery }, ISafeUser[]>;

export type TCreateChatController = IController<{ body: IRawChat }, IChat>;

export type TGetChatController = IController<{ query: IChat }, IChat>;