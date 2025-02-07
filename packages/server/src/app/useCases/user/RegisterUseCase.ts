import { SafeUser } from 'src/app/dtos';
import { User } from 'src/domain/entities';
import { DatabaseError } from 'src/presentation/errorObjects';
import type { IRawUser, IUserRepository, TUserRegisterUseCase } from 'src/domain/types';

export class RegisterUseCase implements TUserRegisterUseCase {
    constructor(private _userRepository: IUserRepository) {}

    async execute(data: IRawUser) {
        if (await this._userRepository.findByEmail(data.email)) {
            throw new DatabaseError('Email is already in use', { email: data.email });
        }

        const userEntity = new User(data);

        userEntity.password.hash();

        const user = userEntity.toObject();

        await this._userRepository.insertOne(user);

        return new SafeUser(user);
    }
}