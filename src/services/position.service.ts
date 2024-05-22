import { Alarma } from "../entities/alarma.model";
import { Position, PositionCreate, PositionCreateInput, PositionUpdateInput } from "../entities/position.model";
import ApiError from "../utils/apiError";
import prisma from "../utils/database.utils";
import { createDateFromFormat } from "../utils/dates.utils";
import { getAlarma } from "./alarma.service";


export const getPositionLast = async (dispositivo_id: number): Promise<Position[]> => {
    try {
        return await prisma.$queryRaw<Position[]>`select * from public."Position" p where p.dispositivo_id =${dispositivo_id} order by p.date desc limit 1;`
    } catch (error) {
        throw new ApiError(500, error.message);
    }
}

export const getPositionDayBegin = async (dispositivo_id: number, date: string, limit: number = 5): Promise<Position[]> => {
    try {
        return await prisma.$queryRaw<Position[]>`select * from public."Position" p where p.dispositivo_id = ${dispositivo_id} and DATE(p.date)=${createDateFromFormat(date)} order by p.date asc limit ${limit};`
    } catch (error) {
        throw new ApiError(500, error.message);
    }
}

export const getPositionDayEnd = async (dispositivo_id: number, date: string, limit: number = 5): Promise<Position> => {
    try {
        return await prisma.$queryRaw<Position>`select * from "Position" p where p.dispositivo_id = ${dispositivo_id} and DATE(p.date) =${createDateFromFormat(date)} order by p.date desc limit ${limit};`
    } catch (error) {
        throw new ApiError(500, error.message);
    }
}

export const getPositionLimit = async (dispositivo_id: number, limit: number = 5): Promise<Position[]> => {
    try {
        return await prisma.$queryRaw<Position[]>`select * from public."Position" p where p.dispositivo_id =${dispositivo_id} order by p.date desc limit ${limit};`
    } catch (error) {
        throw new ApiError(500, error.message);
    }
}

export const positionValueAlarm = async (position: Position) => {
    try {
        const alarma = await getAlarma(position.date.toString());
        console.log(alarma.id);
    } catch (error) {
        throw new ApiError(500, error.message);
    }
}


export const getPositionDispositivo = async (dispositivo_id: number) => {
    try {
        return await prisma.position.findMany({
            where: { dispositivo_id },
        });
    } catch (error) {
        throw new ApiError(500, error.message);
    }
}

/*
Validando posicions
*/
export const getAlarmasByPosition = async (dispositivo_id: number) => {
    try {
        return await prisma.$queryRaw<Alarma[]>`SELECT a.*
                FROM "MotoDispo" AS md 
                JOIN "Moto" AS m ON md.moto_id = m.id 
                JOIN "Sucrusal" AS s ON m.sucrusal_id  = s.id
                JOIN "Alarma" AS a ON s.id  = a.sucrusal_id 
                WHERE md.dispositivo_id = ${dispositivo_id};`
    } catch (error) {
        throw new ApiError(500, error.message);
    }
}
export const isNofityPosition = async (input: Position): Promise<boolean> => {
    try {
        const alarmas = await getAlarmasByPosition(input.dispositivo_id);
        //alarmas.map()
        console.log(alarmas);
        return true;
    } catch (error) {
        throw new ApiError(500, error.message);
    }
}

export const createPosition = async (input: PositionCreate): Promise<PositionUpdateInput> => {
    try {
        return await prisma.position.create({ data: input })
    } catch (error) {
        throw new ApiError(500, error.message);
    }
}

export const updatePosition = async (id: number, input: PositionCreateInput): Promise<PositionUpdateInput> => {
    try {
        return await prisma.position.update({
            where: { id },
            data: input
        })
    } catch (error) {
        throw new ApiError(500, error.message);
    }
}

export const deletePosition = async (id: number): Promise<PositionUpdateInput> => {
    try {
        return await prisma.position.delete({
            where: { id }
        })
    } catch (error) {
        throw new ApiError(500, error.message);
    }
}