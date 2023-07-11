import { Prisma } from '@prisma/client';
export type Position = Prisma.PositionCreateManyInput;

export type PositionCreateInput = Prisma.PositionCreateInput;
export type PositionUpdateInput = Partial<Position>;