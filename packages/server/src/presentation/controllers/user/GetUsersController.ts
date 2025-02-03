import { HttpResponse } from "@presentation/http";
import type { TGetUsersController, IRequest, TUserSearchDetails, TGetUsersUseCase } from "@domain/types";

export class GetUsersController implements TGetUsersController {
    constructor(private _useCase: TGetUsersUseCase) {}

    async execute(data: IRequest<{ query: TUserSearchDetails }>) {
        const result = await this._useCase.execute(data.query);

        return new HttpResponse({
            httpCode: 200,
            body: result
        });
    }
}