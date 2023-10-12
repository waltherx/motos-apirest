"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.motoIdSchema = exports.motoSchema = void 0;
var joi_1 = __importDefault(require("joi"));
exports.motoSchema = joi_1.default.object({
    marca: joi_1.default.string().required(),
    modelo: joi_1.default.string(),
    anio: joi_1.default.number(),
    placa: joi_1.default.string().max(10).alphanum().required(),
    motor: joi_1.default.string(),
    color: joi_1.default.string(),
    peso: joi_1.default.number(),
    kilometraje: joi_1.default.number(),
    estado: joi_1.default.string(),
    fecha_compra: joi_1.default.string().isoDate(),
    precio_compra: joi_1.default.number()
});
exports.motoIdSchema = joi_1.default.object({
    id: joi_1.default.number().min(1).required()
});
