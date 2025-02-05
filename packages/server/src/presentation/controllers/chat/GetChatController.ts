import type { IChat, IRequest, TGetChatController, TGetChatUseCase } from "@domain/types";
import { DatabaseError } from "@presentation/errorObjects";
import { HttpResponse } from "@presentation/http";

export class GetChatController implements TGetChatController {
    constructor(private _useCase: TGetChatUseCase) {}

    async execute(data: IRequest<{ query: IChat }>) {
        try {
            const result = await this._useCase.execute(data.query);

            return new HttpResponse({
                httpCode: 200,
                body: result
            });
        } catch (error) {
            if (error instanceof DatabaseError) {
                return HttpResponse.databaseError(404, error.message, error.query);
            } else {
                return HttpResponse.internalError('An unexpected error occurred while getting chat');
            }
        }
    }
}