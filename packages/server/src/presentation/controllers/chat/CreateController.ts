import { HttpResponse } from "@presentation/http";
import type { IRawChat, IRequest, TCreateChatUseCase } from "@domain/types";

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
            return HttpResponse.internalError('An unexpected error occurred when creating chat');
        }
    }
}