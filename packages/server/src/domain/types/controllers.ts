import type { HttpRequest, HttpResponse } from "@presentation/http";
import type { ILoginCredentials, IRawUser, ISafeUser, IDatabaseError, IInternalError } from "@domain/types"

export interface IController<T, U> {
    execute(data: HttpRequest<T>): Promise<HttpResponse<U | IInternalError>>;
}

export type TUserRegisterController = IController<IRawUser, ISafeUser | IDatabaseError>;

export type TUserLoginController = IController<ILoginCredentials, ISafeUser | IDatabaseError>;