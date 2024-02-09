import prisma from "../utils/database.utils";
import { LocationCreateInput, LocationUpdateInput } from "../models/location.model";

export const getAllLocations = async () => {
    try {
        return await prisma.location.findMany({
            orderBy: {
                id: 'asc'
            }
        });
    } catch (error) {
        console.error(error.message);
        return [];
    }
}

export const getLocation = async (id: string): Promise<LocationUpdateInput> => {
    try {
        return await prisma.location.findUnique({
            where: { id },
        });
    } catch (error) {
        console.error(error.message);
    }
}

export const createLocation = async (input: LocationCreateInput): Promise<LocationUpdateInput> => {
    try {
        return await prisma.location.create({ data: input })
    } catch (error) {
        console.error(error.message);
    }
}

export const updateLocation = async (id: string, input: LocationCreateInput): Promise<LocationUpdateInput> => {
    try {
        return await prisma.location.update({
            where: { id },
            data: input
        })
    } catch (error) {
        console.error(error.message);
    }
}

export const deleteLocation = async (id: string): Promise<LocationUpdateInput> => {
    try {
        return await prisma.location.delete({
            where: { id }
        })
    } catch (error) {
        console.error(error.message);
    }
}