import { UserPolygonCreateInput, UserPolygonUpdateInput } from "../models/userpolygon.model";
import { estadoAlarma } from "../utils/constans";
import prisma from "../utils/database.utils";

export const getAllUserPolygons = async () => {
    try {
        return await prisma.userPolygon.findMany({
            orderBy: {
                id: 'asc'
            }
        });
    } catch (error) {
        console.error(error.message);
        return [];
    }
}

export const getUserPolygon = async (id: string): Promise<UserPolygonUpdateInput> => {
    try {
        return await prisma.userPolygon.findUnique({
            where: { id },
        });
    } catch (error) {
        console.error(error.message);
    }
}

export const createUserPolygon = async (input: UserPolygonCreateInput): Promise<UserPolygonUpdateInput> => {
    try {
        return await prisma.userPolygon.create({ data: input })
    } catch (error) {
        console.error(error.message);
    }
}

export const updateUserPolygon = async (id: string, input: UserPolygonCreateInput): Promise<UserPolygonUpdateInput> => {
    try {
        return await prisma.userPolygon.update({
            where: { id },
            data: input
        })
    } catch (error) {
        console.error(error.message);
    }
}

export const deleteUserPolygon = async (id: string): Promise<UserPolygonUpdateInput> => {
    try {
        return await prisma.userPolygon.delete({
            where: { id }
        })
    } catch (error) {
        console.error(error.message);
    }
}