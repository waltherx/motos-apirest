import { CircleCreateInput, CircleUpdateInput } from "../entities/circle.model";
import prisma from "../utils/database.utils";

export const getAllCircles = async () => {
    try {
        return await prisma.circle.findMany({
            orderBy: {
                id: 'asc'
            }
        });
    } catch (error) {
        console.error(error.message);
        return [];
    }
}

export const getCircle = async (id: string): Promise<CircleUpdateInput> => {
    try {
        return await prisma.circle.findUnique({
            where: { id },
        });
    } catch (error) {
        console.error(error.message);
    }
}

export const createCircle = async (input: CircleCreateInput): Promise<CircleUpdateInput> => {
    try {
        return await prisma.circle.create({ data: input })
    } catch (error) {
        console.error(error.message);
    }
}

export const updateCircle = async (id: string, input: CircleCreateInput): Promise<CircleUpdateInput> => {
    try {
        return await prisma.circle.update({
            where: { id },
            data: input
        })
    } catch (error) {
        console.error(error.message);
    }
}

export const deleteCircle = async (id: string): Promise<CircleUpdateInput> => {
    try {
        return await prisma.circle.delete({
            where: { id }
        })
    } catch (error) {
        console.error(error.message);
    }
}