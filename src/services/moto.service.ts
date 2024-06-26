import { MotoCreateInput, MotoUpdateInput } from "../entities/moto.model";
import ApiError from "../utils/apiError";
import prisma from "../utils/database.utils";

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
                dispositivos: {
                    select: {
                        dispositivo: true
                    }
                },
            }
        });
    } catch (error) {
        throw new ApiError(500, error.message);
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
                dispositivos: {
                    select: { dispositivo: true }
                }
            }
        });
    } catch (error) {
        throw new ApiError(500, error.message);
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
        throw new ApiError(500, error.message);
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
        throw new ApiError(500, error.message);
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
        throw new ApiError(500, error.message);
    }
}

export const getMotoDevice = async (id: string) => {
    try {
        return await prisma.moto.findUnique({
            where: { id },
            include: {
                dispositivos: {
                    select: {
                        dispositivo: true
                    }
                }
            }
        });
    } catch (error) {
        throw new ApiError(500, error.message);
    }
}

export const getMoto = async (id: string) => {
    try {
        return await prisma.moto.findUnique({
            where: { id },
            include: {
                client: {
                    select: {
                        id: true,
                        fullname: true,
                        ci: true,
                        phone: true,
                        address: true,
                        //user_id: true
                    }
                }
            }
        });
    } catch (error) {
        throw new ApiError(500, error.message);
    }
}

export const createMoto = async (input: MotoCreateInput): Promise<MotoUpdateInput> => {
    try {
        return await prisma.moto.create({ data: input })
    } catch (error) {
        throw new ApiError(500, error.message);
    }
}

export const updateMoto = async (id: string, input: MotoCreateInput): Promise<MotoUpdateInput> => {
    try {
        return await prisma.moto.update({
            where: { id },
            data: input
        })
    } catch (error) {
        throw new ApiError(500, error.message);
    }
}

export const deleteMoto = async (id: string): Promise<MotoUpdateInput> => {
    try {
        return await prisma.moto.delete({
            where: { id }
        })
    } catch (error) {
        throw new ApiError(500, error.message);
    }
}