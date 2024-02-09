import { SucrusalCreateInput, SucrusalUpdateInput } from "../models/sucrusal.model";
import prisma from "../utils/database.utils";

export const getAllSucrusals = async () => {
    try {
        return await prisma.sucrusal.findMany();
    } catch (error) {
        console.error(error.message);
        return [];
    }
};

export const getSucrusal = async (id: string): Promise<SucrusalUpdateInput> => {
    try {
        return await prisma.sucrusal.findUnique({
            where: { id }
        });
    } catch (error) {
        console.error(error.message);
        return {};
    }
};