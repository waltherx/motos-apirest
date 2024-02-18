import { z } from 'zod';

export const alarmaSchema = z.object({
    nombre: z.string(),
    estado: z.string(),
    devices: z.string(),
    typealarma_id: z.string().uuid()
});