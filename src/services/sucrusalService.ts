import prisma from "../utils/database";
import { SucrusalCreateInput, SucrusalUpdateInput } from "../models/sucrusalModel";

export const getAllSucrusals = async () => {
    try {
        return await prisma.sucrusal.findMany({
            orderBy: {
                id: 'asc'
            }
        });
    } catch (error) {
        console.error(error.message);
        return [];
    }
}

export const getSucrusal = async (id: number): Promise<SucrusalUpdateInput> => {
    try {
        return await prisma.sucrusal.findUnique({
            where: { id },
        });
    } catch (error) {
        console.error(error.message);
    }
}

export const createSucrusal = async (input: SucrusalCreateInput): Promise<SucrusalUpdateInput> => {
    try {
        return await prisma.sucrusal.create({ data: input })
    } catch (error) {
        console.error(error.message);
    }
}

export const updateSucrusal = async (id: number, input: SucrusalCreateInput): Promise<SucrusalUpdateInput> => {
    try {
        return await prisma.sucrusal.update({
            where: { id },
            data: input
        })
    } catch (error) {
        console.error(error.message);
    }
}

export const deleteSucrusal = async (id: number): Promise<SucrusalUpdateInput> => {
    try {
        return await prisma.sucrusal.delete({
            where: { id }
        })
    } catch (error) {
        console.error(error.message);
    }
}