import { HttpResponse } from "src/presentation/http";
import { DatabaseError, ProhibitedError } from "src/presentation/errorObjects";
import type { TUserLoginController, ILoginCredentials, IRequest, TUserLoginUseCase } from "src/domain/types";

export class LoginController implements TUserLoginController {
    constructor(private _useCase: TUserLoginUseCase) {}

    async execute(data: IRequest<{ body: ILoginCredentials }>) {
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