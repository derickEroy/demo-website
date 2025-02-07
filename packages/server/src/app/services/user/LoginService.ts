import { UserRepository } from '@infrastructure/repositories';
import { getCollection } from '@infrastructure/databases';
import { LoginUseCase } from '@app/useCases';
import { LoginController } from '@presentation/controllers';

export const loginService = new LoginController(
    new LoginUseCase(
        new UserRepository(
            getCollection('users')
        )
    )
);