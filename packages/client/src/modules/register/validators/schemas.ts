import { z, ZodSchema } from 'zod';
import type { IRawUser } from 'server/src/domain/types/dtos';

export const rawUserSchema: ZodSchema<IRawUser> = z.object({
    email: z.string().email(),
    password: z.string().min(8)
});