import { HttpResponse } from '../../http/HttpResponse';
import { DatabaseError } from '../../errorObjects/DatabaseError';
import { SchemaError } from '../../errorObjects/SchemaError';
import type { IRawUser } from '../../../domain/types/dtos';
import type { TUserRegisterController } from '../../../domain/types/controllers';
import type { TUserRegisterUseCase } from '../../../domain/types/useCases';
import type { IRequest } from '../../../domain/types/http';

export class RegisterController implements TUserRegisterController {
    constructor(private _useCase: TUserRegisterUseCase) {}

    async execute(data: IRequest<IRawUser>) {
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