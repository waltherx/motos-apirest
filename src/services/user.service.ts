import bcrypt from 'bcrypt';
import { UserCreateInput, UserUpdateInput } from "../entities/user.model";
import ApiError from '../utils/apiError';
import prisma from "../utils/database.utils";

export const getAllUsers = async () => {
    try {
        return await prisma.user.findMany({
            orderBy: {
                id: 'asc'
            }
        });
    } catch (error) {
        throw new ApiError(500, error.message);
    }
}

export const getUser = async (id: string): Promise<UserUpdateInput> => {
    try {
        return await prisma.user.findUnique({
            where: { id },
        });
    } catch (error) {
        throw new ApiError(500, error.message);
    }
}

export const createUser = async (input: UserCreateInput): Promise<UserUpdateInput> => {
    try {
        console.log(input.username);
        input.password = bcrypt.hashSync(input.password, 8);
        console.log(input.password);
        return await prisma.user.create({ data: input })
    } catch (error) {
        throw new ApiError(500, error.message);
    }
}

export const updateUser = async (id: string, input: UserCreateInput): Promise<UserUpdateInput> => {
    try {
        return await prisma.user.update({
            where: { id },
            data: input
        })
    } catch (error) {
        throw new ApiError(500, error.message);
    }
}

export const deleteUser = async (id: string): Promise<UserUpdateInput> => {
    try {
        return await prisma.user.delete({
            where: { id }
        })
    } catch (error) {
        throw new ApiError(500, error.message);
    }
}