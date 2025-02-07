import { UserRepository } from 'src/infrastructure/repositories/[exports]';
import { getCollection } from 'src/infrastructure/databases/[exports]';
import { RegisterUseCase } from 'src/app/useCases/[exports]';
import { RegisterController } from 'src/presentation/controllers/[exports]';

export const registerService = new RegisterController(
    new RegisterUseCase(
        new UserRepository(
            getCollection('users')
        )
    )
);