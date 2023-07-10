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
const express_1 = require("express");
const clientService_1 = require("../services/clientService");
const router = (0, express_1.Router)();
router.get('/client', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const clientes = yield (0, clientService_1.getAllClients)();
        res.statusCode = 200;
        res.json(clientes);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching data Client" });
    }
}));
router.post('/client', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) {
        console.error(error);
    }
}));
exports.default = router;
