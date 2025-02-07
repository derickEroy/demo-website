import { UserRepository } from 'src/infrastructure/repositories';
import { getCollection } from 'src/infrastructure/databases';
import { LoginUseCase } from 'src/app/useCases';
import { LoginController } from 'src/presentation/controllers';

export const loginService = new LoginController(
    new LoginUseCase(
        new UserRepository(
            getCollection('users')
        )
    )
);