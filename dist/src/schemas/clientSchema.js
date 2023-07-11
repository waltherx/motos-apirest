"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var joi_1 = __importDefault(require("joi"));
var clientSchema = joi_1.default.object({
    //id: joi.number().required(),
    ci: joi_1.default.number().required(),
    fullname: joi_1.default.string().required(),
    address: joi_1.default.string(),
    phone: joi_1.default.string(),
    status: joi_1.default.number().required()
});
exports.default = clientSchema;
