import { RoleCreateInput, RoleUpdateInput } from "../entities/role.model";
import ApiError from "../utils/apiError";
import prisma from "../utils/database.utils";

export const getAllRoles = async () => {
    try {
        return await prisma.role.findMany({
            orderBy: {
                id: 'asc'
            }
        });
    } catch (error) {
        throw new ApiError(500, error.message);
    }
}

export const getRole = async (id: string): Promise<RoleUpdateInput> => {
    try {
        return await prisma.role.findUnique({
            where: { id },
        });
    } catch (error) {
        throw new ApiError(500, error.message);
    }
}

export const createRole = async (input: RoleCreateInput): Promise<RoleUpdateInput> => {
    try {
        return await prisma.role.create({ data: input })
    } catch (error) {
        throw new ApiError(500, error.message);
    }
}

export const updateRole = async (id: string, input: RoleCreateInput): Promise<RoleUpdateInput> => {
    try {
        return await prisma.role.update({
            where: { id },
            data: input
        })
    } catch (error) {
        throw new ApiError(500, error.message);
    }
}

export const deleteRole = async (id: string): Promise<RoleUpdateInput> => {
    try {
        return await prisma.role.delete({
            where: { id }
        })
    } catch (error) {
        throw new ApiError(500, error.message);
    }
}