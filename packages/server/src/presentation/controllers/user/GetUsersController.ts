import { HttpResponse } from "@presentation/http";
import type { TGetUsersController, IRequest, IUserQuery, TGetUsersUseCase } from "@domain/types";

export class GetUsersController implements TGetUsersController {
    constructor(private _useCase: TGetUsersUseCase) {}

    async execute(data: IRequest<{ query: IUserQuery }>) {
        try {
            const result = await this._useCase.execute(data.query);

            return new HttpResponse({
                httpCode: 200,
                body: result
            });
        } catch (error) {
            return HttpResponse.internalError('An unexpected error occurred when getting users');
        }
    }
}