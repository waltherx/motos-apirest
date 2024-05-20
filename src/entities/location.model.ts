import { Prisma } from '@prisma/client';
export type Location = Prisma.LocationCreateManyInput;

export type LocationCreateInput = Prisma.LocationCreateInput;
export type LocationUpdateInput = Partial<Location>;