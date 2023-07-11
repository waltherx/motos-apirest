import prisma from "../utils/database";
import { MenuCreateInput, MenuUpdateInput } from "../models/menuModel";

export const getAllMenus = async () => {
    try {
        return await prisma.menu.findMany({
            orderBy: {
                id: 'asc'
            }
        });
    } catch (error) {
        console.error(error.message);
        return [];
    }
}

export const getMenu = async (id: number): Promise<MenuUpdateInput> => {
    try {
        return await prisma.menu.findUnique({
            where: { id },
        });
    } catch (error) {
        console.error(error.message);
    }
}

export const createMenu = async (input: MenuCreateInput): Promise<MenuUpdateInput> => {
    try {
        return await prisma.menu.create({ data: input })
    } catch (error) {
        console.error(error.message);
    }
}

export const updateMenu = async (id: number, input: MenuCreateInput): Promise<MenuUpdateInput> => {
    try {
        return await prisma.menu.update({
            where: { id },
            data: input
        })
    } catch (error) {
        console.error(error.message);
    }
}

export const deleteMenu = async (id: number): Promise<MenuUpdateInput> => {
    try {
        return await prisma.menu.delete({
            where: { id }
        })
    } catch (error) {
        console.error(error.message);
    }
}