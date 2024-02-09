import { TypegeofenceCreateInput, TypegeofenceUpdateInput } from "../models/typegeofence.model";
import prisma from "../utils/database.utils";

export const getAllTypegeofences = async () => {
    try {
        return await prisma.typegeofence.findMany({
            orderBy: {
                id: 'asc'
            }
        });
    } catch (error) {
        console.error(error.message);
        return [];
    }
}

export const getTypegeofence = async (id: string): Promise<TypegeofenceUpdateInput> => {
    try {
        return await prisma.typegeofence.findUnique({
            where: { id },
        });
    } catch (error) {
        console.error(error.message);
    }
}

export const createTypegeofence = async (input: TypegeofenceCreateInput): Promise<TypegeofenceUpdateInput> => {
    try {
        return await prisma.typegeofence.create({ data: input })
    } catch (error) {
        console.error(error.message);
    }
}

export const updateTypegeofence = async (id: string, input: TypegeofenceCreateInput): Promise<TypegeofenceUpdateInput> => {
    try {
        return await prisma.typegeofence.update({
            where: { id },
            data: input
        })
    } catch (error) {
        console.error(error.message);
    }
}

export const deleteTypegeofence = async (id: string): Promise<TypegeofenceUpdateInput> => {
    try {
        return await prisma.typegeofence.delete({
            where: { id }
        })
    } catch (error) {
        console.error(error.message);
    }
}