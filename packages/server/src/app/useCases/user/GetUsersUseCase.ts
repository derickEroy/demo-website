import type { Filter } from "mongodb";
import type { IUser, IUserRepository, TGetUsersUseCase, IUserQuery } from "@domain/types";

export class GetUsersUseCase implements TGetUsersUseCase {
    constructor(private _userRepository: IUserRepository) {}

    async execute(data: IUserQuery) {
        const query = Object.entries(data).reduce((acc: Filter<IUser>, [key, value]) => {
            acc[key] = { $regex: value, $options: 'i' };
            return acc;
        }, {});

        const documents = await this._userRepository.findMany(query);

        return documents.map((document) => document.toObject());
    }
}