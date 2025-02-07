import { SafeUser } from "src/app/dtos/[exports]";
import { DatabaseError, ProhibitedError } from "src/presentation/errorObjects/[exports]";
import type { ILoginCredentials, IUserRepository, TUserLoginUseCase } from "src/domain/types/[exports]";

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