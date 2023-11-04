import prisma from "../utils/database";
import { Position, PositionCreate, PositionCreateInput, PositionUpdateInput } from "../models/positionModel";

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

export const getPositionLast = async (dispositivo_id: number): Promise<Position> => {
    try {
        return await prisma.$queryRaw<Position>`select * from public."Position" p where p.dispositivo_id =${dispositivo_id} order by p.date desc limit 1;`
    } catch (error) {
        console.error(error.message);
        throw (error.message);
        
    }
}

export const getPositionLimit = async (dispositivo_id: number, limit: number = 5): Promise<Position[]> => {
    try {
        return await prisma.$queryRaw<Position[]>`select * from public."Position" p where p.dispositivo_id =${dispositivo_id} order by p.date desc limit ${limit};`
    } catch (error) {
        console.error(error.message);
        throw (error.message);
    }
}

export const getPositionDispositivo = async (dispositivo_id: number) => {
    try {
        return await prisma.position.findMany({
            where: { dispositivo_id },
        });
    } catch (error) {
        console.error(error.message);
        return [];
    }
}

export const createPosition = async (input: PositionCreate): Promise<PositionUpdateInput> => {
    try {
        return await prisma.position.create({ data: input })
    } catch (error) {
        console.error(error.message);
        throw (error.message);
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
        throw (error.message);
    }
}

export const deletePosition = async (id: number): Promise<PositionUpdateInput> => {
    try {
        return await prisma.position.delete({
            where: { id }
        })
    } catch (error) {
        console.error(error.message);
        throw (error.message);
    }
}