"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMoto = exports.getAllMoto = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getAllMoto = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield prisma.moto.findMany();
    }
    catch (error) {
        console.error(error);
        return [];
    }
});
exports.getAllMoto = getAllMoto;
const createMoto = (input) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const moto = yield prisma.moto.create({ data: input });
        return 1;
    }
    catch (error) {
        console.error(error);
        return 0;
    }
});
exports.createMoto = createMoto;
