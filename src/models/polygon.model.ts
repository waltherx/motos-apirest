import { Prisma } from '@prisma/client';
export type Polygon = Prisma.PolygonCreateManyInput;

export type PolygonCreateInput = Prisma.PolygonCreateInput;
export type PolygonUpdateInput = Partial<Polygon>;