import prisma from "../utils/database";
import { UserOnSucrusal, UserOnSucrusalCreateInput, UserOnSucrusalUpdateInput } from "../models/userSucrusalModel";

export const getAllUserOnSucrusals = async () => {
    try {
        return await prisma.userOnSucrusal.findMany();
    } catch (error) {
        console.error(error.message);
        return [];
    }
}

export const getUserOnSucrusal = async (sucrusal_id: number) => {
    try {
        return await prisma.$queryRaw<UserOnSucrusalUpdateInput[]>`select * FROM public."UserOnSucrusal" WHERE sucrusal_id=${sucrusal_id};`
    } catch (error) {
        console.error(error.message);
    }
}

export const createUserOnSucrusal = async (input: UserOnSucrusalCreateInput): Promise<UserOnSucrusalUpdateInput> => {
    try {
        return await prisma.userOnSucrusal.create({ data: input })
    } catch (error) {
        console.error(error.message);
    }
}

/*export const updateUserOnSucrusal = async (id: number, input: UserOnSucrusalCreateInput): Promise<UserOnSucrusalUpdateInput> => {
    try {
        return await prisma.userOnSucrusal.update({
            where: { id },
            data: input
        })
    } catch (error) {
        console.error(error.message);
    }
}*/