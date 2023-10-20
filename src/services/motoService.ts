import prisma from "../utils/database";
import { MotoCreateInput, MotoSelect, MotoUpdateInput } from "../models/motoModel";

export const searchMotos = async (input: string) => {
    try {
        return await prisma.moto.findMany({
            where: {
                placa: {
                    contains: input,
                    mode: 'insensitive',
                }
            },
            select: {
                id: true,
                placa: true,
                dispositivo: true,
            }
        });
    } catch (error) {
        console.error(error.message);
        return [];
    }
}

export const searchMotosByPlaca = async (input: string) => {
    try {
        return await prisma.moto.findFirst({
            where: {
                placa: {
                    contains: input,
                    mode: 'insensitive',
                }
            },
            include: {
                dispositivo: true
            }
        });
    } catch (error) {
        console.error(error.message);
        return {} as MotoCreateInput;
    }
}


export const searchMotosPlacas = async (input: string) => {
    try {
        return await prisma.moto.findMany({
            where: {
                placa: {
                    contains: input,
                    mode: 'insensitive',
                }
            },
            select: {
                id: true,
                placa: true,
            }
        });
    } catch (error) {
        console.error(error.message);
        return [];
    }
}

export const getAllPlacas = async () => {
    try {
        return await prisma.moto.findMany({
            select: {
                placa: true
            }
        });
    } catch (error) {
        console.error(error.message);
        return [];
    }
}

export const getAllMotos = async () => {
    try {
        return await prisma.moto.findMany({
            orderBy: {
                id: 'asc'
            }
        });
    } catch (error) {
        console.error(error.message);
        return [];
    }
}

export const getMotoDevice = async (id: number) => {
    try {
        return await prisma.moto.findUnique({
            where: { id },
            include: {
                dispositivo: true
            }
        });
    } catch (error) {
        console.error(error.message);
        return {};
    }
}

export const getMoto = async (id: number): Promise<MotoUpdateInput> => {
    try {
        return await prisma.moto.findUnique({
            where: { id },
        });
    } catch (error) {
        console.error(error.message);
    }
}

export const createMoto = async (input: MotoCreateInput): Promise<MotoUpdateInput> => {
    try {
        return await prisma.moto.create({ data: input })
    } catch (error) {
        console.error(error.message);
    }
}

export const updateMoto = async (id: number, input: MotoCreateInput): Promise<MotoUpdateInput> => {
    try {
        return await prisma.moto.update({
            where: { id },
            data: input
        })
    } catch (error) {
        console.error(error.message);
    }
}

export const deleteMoto = async (id: number): Promise<MotoUpdateInput> => {
    try {
        return await prisma.moto.delete({
            where: { id }
        })
    } catch (error) {
        console.error(error.message);
    }
}