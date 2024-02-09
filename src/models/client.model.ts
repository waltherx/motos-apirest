import { Prisma } from '@prisma/client';
export type Client = Prisma.ClientCreateManyInput;

export type ClientCreateInput = Prisma.ClientCreateInput;
export type ClientUpdateInput = Partial<ClientCreateInput>;