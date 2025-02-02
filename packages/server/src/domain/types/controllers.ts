import type { HttpRequest } from "../../presentation/http/HttpRequest";
import type { HttpResponse } from "../../presentation/http/HttpResponse";
import type { ILoginCredentials, IRawUser, ISafeUser } from "./dtos"
import type { IDatabaseError, IInternalError } from "./errors";

export interface IController<T, U> {
    execute(data: HttpRequest<T>): Promise<HttpResponse<U | IInternalError>>;
}

export type TUserRegisterController = IController<IRawUser, ISafeUser | IDatabaseError>;

export type TUserLoginController = IController<ILoginCredentials, ISafeUser | IDatabaseError>;