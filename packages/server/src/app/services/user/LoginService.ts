import { UserRepository, getCollection } from "@infrastructure";
import { LoginUseCase } from "@app/useCases";
import { LoginController } from "@presentation/controllers";

export const userLoginService = new LoginController(
    new LoginUseCase(
        new UserRepository(
            getCollection('users')
        )
    )
);