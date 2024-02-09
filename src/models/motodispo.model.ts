import { Prisma } from '@prisma/client';
export type MotoDispo = Prisma.MotoDispoCreateManyInput;

export type MotoDispoCreateInput = Prisma.MotoDispoCreateInput;
export type MotoDispoUpdateInput = Partial<MotoDispo>;