import { SafeUser } from "@app/dtos";
import { DatabaseError, ProhibitedError } from "@presentation/errorObjects";
import type { ILoginCredentials, IUserRepository, TUserLoginUseCase } from "@domain/types";

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