import { SucrusalUpdateInput } from "../entities/sucrusal.model";
import ApiError from "../utils/apiError";
import prisma from "../utils/database.utils";

export const getAllSucrusals = async () => {
    try {
        return await prisma.sucrusal.findMany();
    } catch (error) {
        throw new ApiError(500, error.message);
    }
};

export const getSucrusal = async (id: string): Promise<SucrusalUpdateInput> => {
    try {
        return await prisma.sucrusal.findUnique({
            where: { id }
        });
    } catch (error) {
        throw new ApiError(500, error.message);
    }
};