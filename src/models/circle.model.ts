import { Prisma } from '@prisma/client';
export type Circle = Prisma.CircleCreateManyInput;

export type CircleCreateInput = Prisma.CircleCreateInput;
export type CircleUpdateInput = Partial<Circle>;