import { MotoCreateInput } from "../models/moto.model";
import joi from "joi";

export const motoSchema = joi.object<MotoCreateInput>({
    marca: joi.string().required(),
    modelo: joi.string(),
    anio: joi.number(),
    placa: joi.string().max(10).alphanum().required(),
    motor: joi.string(),
    color: joi.string(),
    peso: joi.number(),
    kilometraje: joi.number(),
    estado: joi.string(),
    fecha_compra: joi.string().isoDate(),
    precio_compra: joi.number()
});

type motoID = {
    id: number;
}

export const motoIdSchema = joi.object<motoID>({
    id: joi.number().min(1).required()
});


