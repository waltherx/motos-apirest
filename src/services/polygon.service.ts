import { PolygonCreateInput, PolygonUpdateInput } from "../models/polygon.model";
import prisma from "../utils/database.utils";

export const getAllPolygons = async () => {
    try {
        return await prisma.polygon.findMany({
            orderBy: {
                id: 'asc'
            }
        });
    } catch (error) {
        console.error(error.message);
        return [];
    }
}

export const getPolygon = async (id: string): Promise<PolygonUpdateInput> => {
    try {
        return await prisma.polygon.findUnique({
            where: { id },
        });
    } catch (error) {
        console.error(error.message);
    }
}

export const createPolygon = async (input: PolygonCreateInput): Promise<PolygonUpdateInput> => {
    try {
        return await prisma.polygon.create({ data: input })
    } catch (error) {
        console.error(error.message);
    }
}

export const updatePolygon = async (id: string, input: PolygonCreateInput): Promise<PolygonUpdateInput> => {
    try {
        return await prisma.polygon.update({
            where: { id },
            data: input
        })
    } catch (error) {
        console.error(error.message);
    }
}

export const deletePolygon = async (id: string): Promise<PolygonUpdateInput> => {
    try {
        return await prisma.polygon.delete({
            where: { id }
        })
    } catch (error) {
        console.error(error.message);
    }
}