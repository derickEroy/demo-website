import { z, ZodSchema } from 'zod';
import type { ILoginCredentials } from 'server/src/domain/types/dtos';

export const loginCredentialsSchema: ZodSchema<ILoginCredentials> = z.object({
    email: z.string().email(),
    password: z.string()
});