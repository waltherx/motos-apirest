import { Prisma } from '@prisma/client';
import { Client } from "@prisma/client";
import { User } from "./userModel";

export type MotoCreateInput = Prisma.MotoCreateInput;
export type MotoSelect = Prisma.MotoSelect;
//export type MotoResult = Prisma.Moto;

export interface Moto {
    ID: number;
    marca: string;
    modelo: string;
    anio: number;
    placa: string;
    motor: string;
    color: string;
    peso: number;
    kilometraje: number;
    estado: string;
    fecha_compra: string;
    precio_compra: number;
    client: Client;
}

export interface RegisteredMoto {
    placa: string;
    marca: string
    modelo: string;
    fecha_compra: string | null;
    precio_compra: number | null;
    token: string;
}

