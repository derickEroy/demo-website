import { HttpResponse } from "@presentation/http";
import type { IRawChat, IRequest, TCreateChatUseCase } from "@domain/types";
import { SchemaError } from "@presentation/errorObjects";

export class CreateChatController {
    constructor(private _useCase: TCreateChatUseCase) {}

    async execute(data: IRequest<{ body: IRawChat }>) {
        try {
            const result = await this._useCase.execute(data.body);

            return new HttpResponse({
                httpCode: 201,
                body: result
            });
        } catch (error) {
            if (error instanceof SchemaError) {
                return HttpResponse.schemaError(422, error.message, error.cause);
            } else {
                return HttpResponse.internalError('An unexpected error occurred when creating chat');
            }
        }
    }
}