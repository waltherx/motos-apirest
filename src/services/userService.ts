import bcrypt from 'bcrypt';
import prisma from "../utils/database";
import { UserCreateInput, UserUpdateInput } from "../models/userModel";

export const getAllUsers = async () => {
    try {
        return await prisma.user.findMany({
            orderBy: {
                id: 'asc'
            }
        });
    } catch (error) {
        console.error(error.message);
        return [];
    }
}

export const getUser = async (id: number): Promise<UserUpdateInput> => {
    try {
        return await prisma.user.findUnique({
            where: { id },
        });
    } catch (error) {
        console.error(error.message);
    }
}

export const createUser = async (input: UserCreateInput): Promise<UserUpdateInput> => {
    try {
        console.log(input.username);
        input.password = bcrypt.hashSync(input.password, 8);
        console.log(input.password);
        return await prisma.user.create({ data: input })
    } catch (error) {
        throw (error.message);
    }
}

export const updateUser = async (id: number, input: UserCreateInput): Promise<UserUpdateInput> => {
    try {
        return await prisma.user.update({
            where: { id },
            data: input
        })
    } catch (error) {
        console.error(error.message);
    }
}

export const deleteUser = async (id: number): Promise<UserUpdateInput> => {
    try {
        return await prisma.user.delete({
            where: { id }
        })
    } catch (error) {
        console.error(error.message);
    }
}