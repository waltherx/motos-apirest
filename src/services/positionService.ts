import prisma from "../utils/database";
import { PositionCreateInput, PositionUpdateInput } from "../models/positionModel";

export const getAllPositions = async () => {
    try {
        return await prisma.position.findMany({
            orderBy: {
                id: 'asc'
            }
        });
    } catch (error) {
        console.error(error.message);
        return [];
    }
}

export const getPositionMoto = async (moto_id: number) => {
    try {
        return await prisma.position.findMany({
            where: { moto_id },
        });
    } catch (error) {
        console.error(error.message);
        return [];
    }
}

export const createPosition = async (input: PositionCreateInput): Promise<PositionUpdateInput> => {
    try {
        return await prisma.position.create({ data: input })
    } catch (error) {
        console.error(error.message);
    }
}

export const updatePosition = async (id: number, input: PositionCreateInput): Promise<PositionUpdateInput> => {
    try {
        return await prisma.position.update({
            where: { id },
            data: input
        })
    } catch (error) {
        console.error(error.message);
    }
}

export const deletePosition = async (id: number): Promise<PositionUpdateInput> => {
    try {
        return await prisma.position.delete({
            where: { id }
        })
    } catch (error) {
        console.error(error.message);
    }
}