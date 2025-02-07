import { UserRepository } from 'src/infrastructure/repositories';
import { getCollection } from 'src/infrastructure/databases';
import { RegisterUseCase } from 'src/app/useCases';
import { RegisterController } from 'src/presentation/controllers';

export const registerService = new RegisterController(
    new RegisterUseCase(
        new UserRepository(
            getCollection('users')
        )
    )
);