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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClient = exports.getClient = exports.getAllClients = void 0;
const database_1 = __importDefault(require("../utils/database"));
const getAllClients = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield database_1.default.client.findMany();
    }
    catch (error) {
        console.error(error);
        return [];
    }
});
exports.getAllClients = getAllClients;
const getClient = (idClient) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield database_1.default.client.findUnique({
            where: {
                id: idClient
            }
        });
    }
    catch (error) {
        console.error(error);
    }
});
exports.getClient = getClient;
const createClient = (input) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const moto = yield database_1.default.client.create({ data: input });
        return 1;
    }
    catch (error) {
        console.error(error);
        return 0;
    }
});
exports.createClient = createClient;
