import { getCollection } from "@infrastructure/databases";
import { UserRepository } from "@infrastructure/repositories";
import { GetUsersController } from "@presentation/controllers";
import { GetUsersUseCase } from "@app/useCases";

export const getUsersService = new GetUsersController(
    new GetUsersUseCase(
        new UserRepository(
            getCollection('users')
        )
    )
);