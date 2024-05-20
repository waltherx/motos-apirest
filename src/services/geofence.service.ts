import { GeofenceCreateInput, GeofenceUpdateInput } from "../entities/geofence.model";
import prisma from "../utils/database.utils";

export const getAllGeofences = async () => {
    try {
        return await prisma.geofence.findMany({
            orderBy: {
                id: 'asc'
            }
        });
    } catch (error) {
        console.error(error.message);
        return [];
    }
}

export const getGeofence = async (id: string): Promise<GeofenceUpdateInput> => {
    try {
        return await prisma.geofence.findUnique({
            where: { id },
        });
    } catch (error) {
        console.error(error.message);
    }
}

export const createGeofence = async (input: GeofenceCreateInput): Promise<GeofenceUpdateInput> => {
    try {
        return await prisma.geofence.create({ data: input })
    } catch (error) {
        console.error(error.message);
    }
}

export const updateGeofence = async (id: string, input: GeofenceCreateInput): Promise<GeofenceUpdateInput> => {
    try {
        return await prisma.geofence.update({
            where: { id },
            data: input
        })
    } catch (error) {
        console.error(error.message);
    }
}

export const deleteGeofence = async (id: string): Promise<GeofenceUpdateInput> => {
    try {
        return await prisma.geofence.delete({
            where: { id }
        })
    } catch (error) {
        console.error(error.message);
    }
}