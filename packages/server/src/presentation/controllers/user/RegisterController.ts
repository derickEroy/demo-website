import { HttpResponse } from 'src/presentation/http/[exports]';
import { DatabaseError, SchemaError } from 'src/presentation/errorObjects/[exports]';
import type { IRawUser, TUserRegisterController, TUserRegisterUseCase, IRequest } from 'src/domain/types/[exports]';

export class RegisterController implements TUserRegisterController {
    constructor(private _useCase: TUserRegisterUseCase) {}

    async execute(data: IRequest<{ body: IRawUser }>) {
        try {
            const result = await this._useCase.execute(data.body);

            return new HttpResponse({
                httpCode: 201,
                body: result,
                sessionData: { userId: result._id }
            });
        } catch (error) {
            if (error instanceof DatabaseError) {
                return HttpResponse.databaseError(409, error.message, error.query);
            } else if (error instanceof SchemaError) {
                return HttpResponse.schemaError(422, error.message, error.cause);
            } else {
                return HttpResponse.internalError('An unexpected error occurred during user registeration');
            }
        }
    }
}