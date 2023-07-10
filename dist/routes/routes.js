"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const motoRoute_1 = __importDefault(require("./motoRoute"));
const api = (0, express_1.Router)()
    .use(motoRoute_1.default);
exports.default = (0, express_1.Router)().use('/api', api);
