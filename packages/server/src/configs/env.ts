import { InternalError } from "@presentation/errorObjects";

function assertEnvVar(name: string, value: string | undefined): asserts value is string {
    if (value === undefined) {
        throw new InternalError(`Environment variable ${name} is undefined`);
    }
}

assertEnvVar('PORT', process.env.PORT);
assertEnvVar('DB_URI', process.env.DB_URI);
assertEnvVar('DB_NAME', process.env.DB_NAME);
assertEnvVar('SECRET_KEY', process.env.SECRET_KEY);

export const port = process.env.PORT;
export const dbUri = process.env.DB_URI;
export const dbName = process.env.DB_NAME;
export const secretKey = process.env.SECRET_KEY;