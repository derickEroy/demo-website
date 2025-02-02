import { z, ZodSchema } from "zod";
import { ObjectId } from "mongodb";
import type { IUser } from "../../domain/types/documents";

export const userSchema: ZodSchema<IUser> = z.object({
    _id: z.instanceof(ObjectId),
    email: z.string().email(),
    password: z.string().min(8),
    createdAt: z.date(),
    updatedAt: z.date()
});