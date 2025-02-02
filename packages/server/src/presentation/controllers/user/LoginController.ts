import { DatabaseError } from "../../errorObjects/DatabaseError";
import { HttpResponse } from "../../http/HttpResponse";
import { ProhibitedError } from "../../errorObjects/ProhibitedError";
import type { TUserLoginController } from "../../../domain/types/controllers";
import type { ILoginCredentials } from "../../../domain/types/dtos";
import type { IRequest } from "../../../domain/types/http";
import type { TUserLoginUseCase } from "../../../domain/types/useCases";

export class LoginController implements TUserLoginController {
    constructor(private _useCase: TUserLoginUseCase) {}

    async execute(data: IRequest<ILoginCredentials>) {
        try {
            const result = await this._useCase.execute(data.body);

            return new HttpResponse({
                httpCode: 200,
                body: result,
                sessionData: { userId: result._id }
            });
        } catch (error) {
            if (error instanceof DatabaseError) {
                return HttpResponse.databaseError(404, error.message, error.query);
            } else if (error instanceof ProhibitedError) {
                return HttpResponse.prohibitedError(401, error.message, error.credentials);
            } else {
                return HttpResponse.internalError('An unexpected error occurred during user login');
            }
        }
    }
}