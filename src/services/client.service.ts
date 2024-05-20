import { ClientCreateInput, ClientUpdateInput } from "../entities/client.model";
import prisma from "../utils/database.utils";

export const getAllClients = async () => {
  try {
    return await prisma.client.findMany({
      select: {
        id: true,
        ci: true,
        fullname: true,
        address: true,
        phone: true,
      },
      orderBy: {
        id: "asc",
      },
    });
  } catch (error) {
    console.error(error.message);
    return [];
  }
};

export const getClient = async (id: string): Promise<ClientUpdateInput> => {
  try {
    return await prisma.client.findUnique({
      where: { id },
      select: {
        id: true,
        ci: true,
        fullname: true,
        address: true,
        phone: true,
      },
    });
  } catch (error) {
    console.error(error.message);
  }
};

export const getClientMotos = async (id: string) => {
  try {
    return await prisma.client.findUnique({
      where: { id },
      select: {
        id: true,
        ci: true,
        fullname: true,
        address: true,
        phone: true,
        motos: true,
      },
    });
  } catch (error) {
    console.error(error.message);
  }
};

export const createClient = async (
  input: ClientCreateInput
): Promise<ClientUpdateInput> => {
  try {
    return await prisma.client.create({ data: input });
  } catch (error) {
    console.error(error.message);
  }
};

export const updateClient = async (
  id: string,
  input: ClientCreateInput
): Promise<ClientUpdateInput> => {
  try {
    return await prisma.client.update({
      where: { id },
      data: input,
    });
  } catch (error) {
    console.error(error.message);
  }
};

export const deleteClient = async (id: string): Promise<ClientUpdateInput> => {
  try {
    return await prisma.client.delete({
      where: { id },
    });
  } catch (error) {
    console.error(error.message);
  }
};
