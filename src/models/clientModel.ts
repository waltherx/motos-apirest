import { Prisma } from '@prisma/client';

export type ClientCreateInput = Prisma.ClientCreateInput;
export type ClientSelect = Prisma.ClientSelect;
export type ClientWhere = Prisma.ClientWhereUniqueInput;

export type ClientUpdateInput = Partial<ClientCreateInput>;