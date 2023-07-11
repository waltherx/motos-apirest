import prisma from "../utils/database";
import { ClientCreateInput, ClientUpdateInput } from "../models/clientModel";


export const getAllClients = async () => {
    try {
        return await prisma.client.findMany({
            select: {
                id: true,
                ci: true,
                fullname: true,
                address: true,
                phone: true,
                status: true,
            },
            orderBy: {
                id: 'asc',
            },
        });
    } catch (error) {
        console.error(error.message);
        return [];
    }
}

export const getClient = async (id: number): Promise<ClientUpdateInput> => {
    try {
        return await prisma.client.findUnique({
            where: { id },
            select: {
                id: true,
                ci: true,
                fullname: true,
                address: true,
                phone: true,
                status: true,
            }
        });
    } catch (error) {
        console.error(error.message);
    }
}

export const createClient = async (input: ClientCreateInput): Promise<ClientUpdateInput> => {
    try {
        return await prisma.client.create({ data: input })
    } catch (error) {
        console.error(error.message);
    }
}

export const updateClient = async (id: number, input: ClientCreateInput): Promise<ClientUpdateInput> => {
    try {
        return await prisma.client.update({
            where: { id },
            data: input
        })
    } catch (error) {
        console.error(error.message);
    }
}

export const deleteClient = async (id: number): Promise<ClientUpdateInput> => {
    try {
        return await prisma.client.delete({
            where: { id }
        })
    } catch (error) {
        console.error(error.message);
    }
}