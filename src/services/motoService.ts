import { PrismaClient } from "@prisma/client"
import { MotoCreateInput } from "../models/motoModel";

const prisma = new PrismaClient();

export const getAllMoto = async () => {
    try {
        return await prisma.moto.findMany();
    } catch (error) {
        console.error(error);
        return [];
    }

}

export const createMoto = async (input: MotoCreateInput): Promise<number> => {
    try {
        const moto = await prisma.moto.create({ data: input })
        return 1;
    } catch (error) {
        console.error(error);
        return 0;
    }
}