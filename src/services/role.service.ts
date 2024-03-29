import { RoleCreateInput, RoleUpdateInput } from "../models/role.model";
import prisma from "../utils/database.utils";

export const getAllRoles = async () => {
    try {
        return await prisma.role.findMany({
            orderBy: {
                id: 'asc'
            }
        });
    } catch (error) {
        console.error(error.message);
        return [];
    }
}

export const getRole = async (id: string): Promise<RoleUpdateInput> => {
    try {
        return await prisma.role.findUnique({
            where: { id },
        });
    } catch (error) {
        console.error(error.message);
    }
}

export const createRole = async (input: RoleCreateInput): Promise<RoleUpdateInput> => {
    try {
        return await prisma.role.create({ data: input })
    } catch (error) {
        console.error(error.message);
    }
}

export const updateRole = async (id: string, input: RoleCreateInput): Promise<RoleUpdateInput> => {
    try {
        return await prisma.role.update({
            where: { id },
            data: input
        })
    } catch (error) {
        console.error(error.message);
    }
}

export const deleteRole = async (id: string): Promise<RoleUpdateInput> => {
    try {
        return await prisma.role.delete({
            where: { id }
        })
    } catch (error) {
        console.error(error.message);
    }
}