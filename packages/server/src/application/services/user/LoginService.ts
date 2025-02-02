import { LoginUseCase } from "../../useCases/user/LoginUseCase";
import { UserRepository } from "../../../infrastructure/repositories/UserRepository";
import { LoginController } from "../../../presentation/controllers/user/LoginController";
import { getCollection } from "../../../infrastructure/databases/mongo";

export const userLoginService = new LoginController(
    new LoginUseCase(
        new UserRepository(
            getCollection('users')
        )
    )
);