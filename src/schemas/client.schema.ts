import { z } from "zod";

const clientSchema = z
    .object({
        id: z.string().optional(),
        ci: z.string().min(8, 'minimo'),
        fullname: z.string(),
        address: z.string().email('email').optional(),
        phone: z.string().optional()
    });

export default clientSchema;
