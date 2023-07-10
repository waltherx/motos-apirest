import prisma from "../utils/database";
import { ClientCreateInput } from "../models/clientModel";

export const getAllClients = async () => {
    try {
        return await prisma.client.findMany();
    } catch (error) {
        console.error(error);
        return [];
    }
}

export const getClient = async (idClient: number) => {
    try {
        return await prisma.client.findUnique({
            where: {
                id: idClient
            }
        });
    } catch (error) {
        console.error(error);
    }
}

export const createClient = async (input: ClientCreateInput): Promise<number> => {
    try {
        const moto = await prisma.client.create({ data: input })
        return 1;
    } catch (error) {
        console.error(error);
        return 0;
    }
}