import { Prisma } from '@prisma/client';
export type Menu = Prisma.MenuCreateManyInput;

export type MenuCreateInput = Prisma.MenuCreateInput;
export type MenuUpdateInput = Partial<Menu>;