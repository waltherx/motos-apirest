import { AlarmaCreateInput, AlarmaUpdateInput } from "../entities/alarma.model";
import prisma from "../utils/database.utils";
import { estadoAlarma } from "../utils/constans";
import ApiError from "../utils/apiError";

export const getAllAlarmas = async (): Promise<AlarmaUpdateInput[]> => {
    try {
        return await prisma.alarma.findMany({
            orderBy: {
                id: "asc",
            },
        });
    } catch (error) {
        throw new ApiError(500, error.message);
    }
};

export const getAllAlarmasActives = async (): Promise<AlarmaUpdateInput[]> => {
    try {
        return await prisma.alarma.findMany({
            where: {
                estado: estadoAlarma.On,
            },
        });
    } catch (error) {
        throw new ApiError(500, error.message);
    }
};

export const getAlarma = async (id: string): Promise<AlarmaUpdateInput> => {
    try {
        return await prisma.alarma.findUnique({
            where: { id }
        });
    } catch (error) {
        throw new ApiError(500, error.message);
    }
};

export const createAlarma = async (
    input: AlarmaCreateInput
): Promise<AlarmaUpdateInput> => {
    try {
        return await prisma.alarma.create({ data: input });
    } catch (error) {
        throw new ApiError(500, error.message);
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
        throw new ApiError(500, error.message);
    }
};

export const deleteAlarma = async (id: string): Promise<AlarmaUpdateInput> => {
    try {
        return await prisma.alarma.delete({
            where: { id },
        });
    } catch (error) {
        throw new ApiError(500, error.message);
    }
};
