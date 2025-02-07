import { getCollection } from "src/infrastructure/databases";
import { UserRepository } from "src/infrastructure/repositories";
import { GetUsersController } from "src/presentation/controllers";
import { GetUsersUseCase } from "src/app/useCases";

export const getUsersService = new GetUsersController(
    new GetUsersUseCase(
        new UserRepository(
            getCollection('users')
        )
    )
);