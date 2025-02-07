import { UserRepository } from '@infrastructure/repositories';
import { getCollection } from '@infrastructure/databases';
import { RegisterUseCase } from '@app/useCases';
import { RegisterController } from '@presentation/controllers';

export const registerService = new RegisterController(
    new RegisterUseCase(
        new UserRepository(
            getCollection('users')
        )
    )
);