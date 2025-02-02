import { SafeUser } from "../../dtos/SafeUser";
import { DatabaseError } from "../../../presentation/errorObjects/DatabaseError";
import { ProhibitedError } from "../../../presentation/errorObjects/ProhibitedError";
import type { ILoginCredentials } from "../../../domain/types/dtos";
import type { IUserRepository } from "../../../domain/types/repositories";
import type { TUserLoginUseCase } from "../../../domain/types/useCases";

export class LoginUseCase implements TUserLoginUseCase {
    constructor(private _userRepository: IUserRepository) {}

    async execute(data: ILoginCredentials) {
        const user = await this._userRepository.findByEmail(data.email);
        
        if (!user) {
            throw new DatabaseError('Email does not exist', { email: data.email });
        }

        if (!user.password.compare(data.password)) {
            throw new ProhibitedError('Incorrect password', ['password']);
        }

        return new SafeUser(user.toObject());
    }
}