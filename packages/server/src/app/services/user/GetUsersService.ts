import { getCollection } from "src/infrastructure/databases/[exports]";
import { UserRepository } from "src/infrastructure/repositories/[exports]";
import { GetUsersController } from "src/presentation/controllers/[exports]";
import { GetUsersUseCase } from "src/app/useCases/[exports]";

export const getUsersService = new GetUsersController(
    new GetUsersUseCase(
        new UserRepository(
            getCollection('users')
        )
    )
);