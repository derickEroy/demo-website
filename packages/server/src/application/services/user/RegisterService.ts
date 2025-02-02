import { UserRepository } from "../../../infrastructure/repositories/UserRepository";
import { RegisterUseCase } from "../../useCases/user/RegisterUseCase";
import { RegisterController } from "../../../presentation/controllers/user/RegisterController";
import { getCollection } from "../../../infrastructure/databases/mongo";

export const userRegisterService = new RegisterController(
    new RegisterUseCase(
        new UserRepository(
            getCollection('users')
        )
    )
);