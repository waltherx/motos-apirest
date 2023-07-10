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
const motoService_1 = require("../services/motoService");
const router = (0, express_1.Router)();
router.get('/moto');
router.get('/moto', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const motos = yield (0, motoService_1.getAllMoto)();
        res.statusCode = 200;
        res.json({ motos });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ message: "Error fetching data Moto" });
    }
}));
router.post('moto', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) {
        console.error(error);
    }
}));
exports.default = router;
