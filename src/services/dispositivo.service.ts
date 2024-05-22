import { DispositivoCreateInput, DispositivoUpdateInput } from "../entities/dispositivo.models";
import ApiError from "../utils/apiError";
import prisma from "../utils/database.utils";


export const getAllDispositivos = async () => {
    try {
        return await prisma.dispositivo.findMany({
            orderBy: {
                id: 'asc',
            },
        });
    } catch (error) {
        throw new ApiError(500, error.message);
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
        throw new ApiError(500, error.message);
    }
}

export const getDispositivo = async (id: number): Promise<DispositivoUpdateInput> => {
    try {
        return await prisma.dispositivo.findUnique({
            where: { id },
        });
    } catch (error) {
        throw new ApiError(500, error.message);
    }
}

export const createDispositivo = async (input: DispositivoCreateInput): Promise<DispositivoUpdateInput> => {
    try {
        const serial = input.serial;
        const chipgsm = input.chipgsm;
        const existGsm = await prisma.dispositivo.findUnique({
            where: { chipgsm },
        })
        if (existGsm) throw new ApiError(404, "Chip gsm ya esta registrado");
        const existSerial = await prisma.dispositivo.findUnique({
            where: { serial },
        })
        if (existSerial) throw new ApiError(404, "Serial ya esta registrado");
        else return await prisma.dispositivo.create({ data: input });
    } catch (error) {
        throw new ApiError(500, error.message);
    }
}

export const updateDispositivo = async (id: number, input: DispositivoCreateInput): Promise<DispositivoUpdateInput> => {
    try {
        return await prisma.dispositivo.update({
            where: { id },
            data: input
        })
    } catch (error) {
        throw new ApiError(500, error.message);
    }
}

export const deleteDispositivo = async (id: number): Promise<DispositivoUpdateInput> => {
    try {
        return await prisma.dispositivo.delete({
            where: { id }
        })
    } catch (error) {
        throw new ApiError(500, error.message);
    }
}