import { TypeparkedCreateInput, TypeparkedUpdateInput } from "../models/typeparked.model";
import prisma from "../utils/database.utils";

export const getAllTypeParkeds = async () => {
    try {
        return await prisma.typeparked.findMany({
            orderBy: {
                id: 'asc'
            }
        });
    } catch (error) {
        console.error(error.message);
        return [];
    }
}

export const getTypeParked = async (id: string): Promise<TypeparkedUpdateInput> => {
    try {
        return await prisma.typeparked.findUnique({
            where: { id },
        });
    } catch (error) {
        console.error(error.message);
    }
}

export const createTypeParked = async (input: TypeparkedCreateInput): Promise<TypeparkedUpdateInput> => {
    try {
        return await prisma.typeparked.create({ data: input })
    } catch (error) {
        console.error(error.message);
    }
}

export const updateTypeParked = async (id: string, input: TypeparkedCreateInput): Promise<TypeparkedUpdateInput> => {
    try {
        return await prisma.typeparked.update({
            where: { id },
            data: input
        })
    } catch (error) {
        console.error(error.message);
    }
}

export const deleteTypeParked = async (id: string): Promise<TypeparkedUpdateInput> => {
    try {
        return await prisma.typeparked.delete({
            where: { id }
        })
    } catch (error) {
        console.error(error.message);
    }
}