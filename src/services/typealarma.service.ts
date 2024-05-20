/*import { TypeAlarmaCreateInput, TypeAlarmaUpdateInput } from "../models/typealarma.model";
import prisma from "../utils/database.utils";

export const getAllTypeAlarmas = async () => {
    try {
        return await prisma.typeAlarma.findMany({
            orderBy: {
                id: 'asc'
            }
        });
    } catch (error) {
        console.error(error.message);
        return [];
    }
}

export const getTypeAlarma = async (id: string): Promise<TypeAlarmaUpdateInput> => {
    try {
        return await prisma.typeAlarma.findUnique({
            where: { id },
        });
    } catch (error) {
        console.error(error.message);
    }
}

export const createTypeAlarma = async (input: TypeAlarmaCreateInput): Promise<TypeAlarmaUpdateInput> => {
    try {
        return await prisma.typeAlarma.create({ data: input })
    } catch (error) {
        console.error(error.message);
    }
}

export const updateTypeAlarma = async (id: string, input: TypeAlarmaCreateInput): Promise<TypeAlarmaUpdateInput> => {
    try {
        return await prisma.typeAlarma.update({
            where: { id },
            data: input
        })
    } catch (error) {
        console.error(error.message);
    }
}

export const deleteTypeAlarma = async (id: string): Promise<TypeAlarmaUpdateInput> => {
    try {
        return await prisma.typeAlarma.delete({
            where: { id }
        })
    } catch (error) {
        console.error(error.message);
    }
}*/