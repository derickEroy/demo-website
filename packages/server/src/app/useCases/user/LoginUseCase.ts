import { SafeUser } from "src/app/dtos";
import { DatabaseError, ProhibitedError } from "src/presentation/errorObjects";
import type { ILoginCredentials, IUserRepository, TUserLoginUseCase } from "src/domain/types";

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