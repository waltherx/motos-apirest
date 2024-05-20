import { Prisma } from '@prisma/client';
export type Role = Prisma.RoleCreateManyInput;

export type RoleCreateInput = Prisma.RoleCreateInput;
export type RoleUpdateInput = Partial<Role>;