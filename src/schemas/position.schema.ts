import { z } from 'zod';

export const positionSearhDateSchema = z.object({
    id: z.string(),
    fecha: z.date(),
    limit: z.number().optional()
});



