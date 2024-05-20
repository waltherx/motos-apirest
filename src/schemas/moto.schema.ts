import { MotoCreateInput } from "../entities/moto.model";
import { z, ZodType } from 'zod'

export const motoSchema = z.object({
    marca: z.string(),
    modelo: z.string(),
    placa: z.string().max(10),
    litrokm: z.number(),
    estado: z.string(),
});

type motoID = {
    id: number;
}

export const motoIdSchema = z.object({
    id: z.number().min(1)
});


