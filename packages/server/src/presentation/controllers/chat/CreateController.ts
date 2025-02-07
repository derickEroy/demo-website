import { HttpResponse } from "src/presentation/http";
import { SchemaError } from "src/presentation/errorObjects";
import type { IRawChat, IRequest, TCreateChatController, TCreateChatUseCase } from "src/domain/types";

export class CreateChatController implements TCreateChatController {
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