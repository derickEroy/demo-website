import { DatabaseError } from "src/presentation/errorObjects/[exports]";
import { HttpResponse } from "src/presentation/http/[exports]";
import type { IChat, IRequest, TGetChatController, TGetChatUseCase } from "src/domain/types/[exports]";

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