import { MotoDispoCreateInput, MotoDispoUpdateInput } from "../models/motodispo.model";
import prisma from "../utils/database.utils";

export const getAllMotoDispos = async () => {
    try {
        return await prisma.motoDispo.findMany({
            orderBy: {
                id: 'asc'
            }
        });
    } catch (error) {
        console.error(error.message);
        return [];
    }
}

export const getMotoDispo = async (id: string): Promise<MotoDispoUpdateInput> => {
    try {
        return await prisma.motoDispo.findUnique({
            where: { id },
        });
    } catch (error) {
        console.error(error.message);
    }
}

export const createMotoDispo = async (input: MotoDispoCreateInput): Promise<MotoDispoUpdateInput> => {
    try {
        return await prisma.motoDispo.create({ data: input })
    } catch (error) {
        console.error(error.message);
    }
}

export const updateMotoDispo = async (id: string, input: MotoDispoCreateInput): Promise<MotoDispoUpdateInput> => {
    try {
        return await prisma.motoDispo.update({
            where: { id },
            data: input
        })
    } catch (error) {
        console.error(error.message);
    }
}

export const deleteMotoDispo = async (id: string): Promise<MotoDispoUpdateInput> => {
    try {
        return await prisma.motoDispo.delete({
            where: { id }
        })
    } catch (error) {
        console.error(error.message);
    }
}