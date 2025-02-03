import { UserRepository, getCollection } from "@infrastructure";
import { RegisterUseCase } from "@app/useCases";
import { RegisterController } from "@presentation/controllers";

export const userRegisterService = new RegisterController(
    new RegisterUseCase(
        new UserRepository(
            getCollection('users')
        )
    )
);