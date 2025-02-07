import { z, ZodSchema } from "zod";
import { ObjectId } from "mongodb";
import type { IChat, IUser } from "src/domain/types/[exports]";

export const userSchema: ZodSchema<IUser> = z.object({
    _id: z.instanceof(ObjectId),
    createdAt: z.date(),
    updatedAt: z.date(),
    email: z.string().email(),
    password: z.string().min(8)
});

export const chatSchema: ZodSchema<IChat> = z.object({
    _id: z.instanceof(ObjectId),
    createdAt: z.date(),
    updatedAt: z.date(),
    participants: z.array(z.instanceof(ObjectId))
});