import { Prisma } from '@prisma/client';
export type Position = Prisma.PositionCreateManyInput;

export type PositionCreateInput = Prisma.PositionCreateInput;
export type PositionUpdateInput = Partial<Position>;

export type PositionCreate = Omit<Position, "id">;

export type PositionSearchDate =
    {
        id: number,
        fecha: string,
        limit?: number
    }