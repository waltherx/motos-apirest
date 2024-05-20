import { DispositivoCreateInput, DispositivoUpdateInput } from "../entities/dispositivo.models";
import prisma from "../utils/database.utils";


export const getAllDispositivos = async () => {
    try {
        return await prisma.dispositivo.findMany({
            orderBy: {
                id: 'asc',
            },
        });
    } catch (error) {
        console.error(error.message);
        return [];
    }
}

export const getDispositivoSerial = async (id: string): Promise<DispositivoUpdateInput> => {
    try {
        return await prisma.dispositivo.findFirst({
            where: {
                serial: id
            },
        });
    } catch (error) {
        console.error(error.message);
    }
}

export const getDispositivo = async (id: number): Promise<DispositivoUpdateInput> => {
    try {
        return await prisma.dispositivo.findUnique({
            where: { id },
        });
    } catch (error) {
        console.error(error.message);
    }
}

export const createDispositivo = async (input: DispositivoCreateInput): Promise<DispositivoUpdateInput> => {
    try {
        return await prisma.dispositivo.create({ data: input })
    } catch (error) {
        console.error(error.message);
    }
}

export const updateDispositivo = async (id: number, input: DispositivoCreateInput): Promise<DispositivoUpdateInput> => {
    try {
        return await prisma.dispositivo.update({
            where: { id },
            data: input
        })
    } catch (error) {
        console.error(error.message);
    }
}

export const deleteDispositivo = async (id: number): Promise<DispositivoUpdateInput> => {
    try {
        return await prisma.dispositivo.delete({
            where: { id }
        })
    } catch (error) {
        console.error(error.message);
    }
}