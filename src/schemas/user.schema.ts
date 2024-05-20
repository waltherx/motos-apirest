import { z } from 'zod';

const userLoginSchema = z.object({
    username: z.string({
        required_error: "requerido.",
        invalid_type_error: "UserName es invalido.",
    }).trim().min(5).max(20),
    password: z.string().min(8).max(30),
});

const refreshSchema = z.object({
    token: z.string()
});
const userSchema = z.object({
    username: z.string().min(5).max(20),
    password: z.string().min(8).max(30),
    email: z.string().email(),
    avatar: z.string().optional(),
    isAdmin: z.boolean().optional(),
    //status: z.string().op,
    role_id: z.string().uuid(),
    sucrusal_id: z.string().optional()
})
export { refreshSchema, userLoginSchema, userSchema };
