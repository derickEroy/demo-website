import { SafeUser } from '../../dtos/SafeUser';
import { User } from '../../../domain/entities/User';
import { DatabaseError } from '../../../presentation/errorObjects/DatabaseError';
import type { IRawUser } from '../../../domain/types/dtos';
import type { IUserRepository } from '../../../domain/types/repositories';
import type { TUserRegisterUseCase } from '../../../domain/types/useCases'

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