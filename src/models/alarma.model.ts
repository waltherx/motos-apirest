import { Prisma } from '@prisma/client';
export type Alarma = Prisma.AlarmaCreateManyInput;

export type AlarmaCreateInput = Prisma.AlarmaCreateInput;
export type AlarmaUpdateInput = Partial<AlarmaCreateInput>;