
import { AlarmaCreateInput, AlarmaUpdateInput } from "../models/alarmaModel";
import prisma from "../utils/database";

export const getAllAlarmas = async (): Promise<AlarmaUpdateInput[]> => {
    try {
        return await prisma.alarma.findMany({
            orderBy: {
                id: "asc",
            },
        });
    } catch (error) {
        console.error(error.message);
        return [];
    }
};

export const getAlarma = async (id: string): Promise<AlarmaUpdateInput> => {
    try {
        return await prisma.alarma.findUnique({
            where: { id }
        });
    } catch (error) {
        console.error(error.message);
    }
};

export const createAlarma = async (
    input: AlarmaCreateInput
): Promise<AlarmaUpdateInput> => {
    try {
        return await prisma.alarma.create({ data: input });
    } catch (error) {
        console.error(error.message);
    }
};

export const updateAlarma = async (
    id: string,
    input: AlarmaCreateInput
): Promise<AlarmaUpdateInput> => {
    try {
        return await prisma.alarma.update({
            where: { id },
            data: input,
        });
    } catch (error) {
        console.error(error.message);
    }
};

export const deleteAlarma = async (id: string): Promise<AlarmaUpdateInput> => {
    try {
        return await prisma.alarma.delete({
            where: { id },
        });
    } catch (error) {
        console.error(error.message);
    }
};
