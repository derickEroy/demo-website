import { UserRepository } from 'src/infrastructure/repositories/[exports]';
import { getCollection } from 'src/infrastructure/databases/[exports]';
import { LoginUseCase } from 'src/app/useCases/[exports]';
import { LoginController } from 'src/presentation/controllers/[exports]';

export const loginService = new LoginController(
    new LoginUseCase(
        new UserRepository(
            getCollection('users')
        )
    )
);