/*import { UserAlarmaCreateInput, UserAlarmaUpdateInput } from "../models/useralarma.model";
import { estadoAlarma } from "../utils/constans";
import prisma from "../utils/database.utils";

export const getAllUserAlarmas = async () => {
    try {
        return await prisma.userAlarma.findMany({
            orderBy: {
                id: 'asc'
            }
        });
    } catch (error) {
        console.error(error.message);
        return [];
    }
}

export const getUserAlarma = async (id: string): Promise<UserAlarmaUpdateInput> => {
    try {
        return await prisma.userAlarma.findUnique({
            where: { id },
        });
    } catch (error) {
        console.error(error.message);
    }
}

export const getAllUserAlarmasActives = async () => {
    try {
        return await prisma.userAlarma.findMany({
            where: {
                estado: estadoAlarma.On
            },
        });
    } catch (error) {
        console.error(error.message);
    }
}


export const createUserAlarma = async (input: UserAlarmaCreateInput): Promise<UserAlarmaUpdateInput> => {
    try {
        return await prisma.userAlarma.create({ data: input })
    } catch (error) {
        console.error(error.message);
    }
}

export const updateUserAlarma = async (id: string, input: UserAlarmaCreateInput): Promise<UserAlarmaUpdateInput> => {
    try {
        return await prisma.userAlarma.update({
            where: { id },
            data: input
        })
    } catch (error) {
        console.error(error.message);
    }
}

export const deleteUserAlarma = async (id: string): Promise<UserAlarmaUpdateInput> => {
    try {
        return await prisma.userAlarma.delete({
            where: { id }
        })
    } catch (error) {
        console.error(error.message);
    }
}*/