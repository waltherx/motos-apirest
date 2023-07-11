import prisma from "../utils/database";
import { ClientCreateInput, ClientUpdateInput } from "../models/clientModel";



export const getAllClients = async () => {
    try {
        return await prisma.client.findMany();
    } catch (error) {
        console.error(error);
        return [];
    }
}

export const getClient = async (id: number): Promise<ClientUpdateInput> => {
    try {
        return await prisma.client.findUnique({
            where: { id },
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