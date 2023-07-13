import { Prisma } from '@prisma/client';
export type Sucrusal = Prisma.SucrusalCreateManyInput;

export type SucrusalCreateInput = Prisma.RoleCreateInput;
export type SucrusalUpdateInput = Partial<Sucrusal>;