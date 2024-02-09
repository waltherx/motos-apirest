import { Prisma } from '@prisma/client';
export type Geofence = Prisma.GeofenceCreateManyInput;

export type GeofenceCreateInput = Prisma.GeofenceCreateInput;
export type GeofenceUpdateInput = Partial<Geofence>;