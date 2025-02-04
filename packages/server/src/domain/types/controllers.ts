import type { HttpRequest, HttpResponse } from "@presentation/http";
import type { ILoginCredentials, IRawUser, ISafeUser, IDatabaseError, IInternalError, TUserSearchDetails, TRequestProps, IRawChat, IChat } from "@domain/types"

export interface IController<T extends TRequestProps, U> {
    execute(data: HttpRequest<T>): Promise<HttpResponse<U | IInternalError>>;
}

export type TUserRegisterController = IController<{ body: IRawUser }, ISafeUser | IDatabaseError>;

export type TUserLoginController = IController<{ body: ILoginCredentials }, ISafeUser | IDatabaseError>;

export type TGetUsersController = IController<{ query: TUserSearchDetails }, ISafeUser[]>;

export type TCreateChatController = IController<{ body: IRawChat }, IChat>;