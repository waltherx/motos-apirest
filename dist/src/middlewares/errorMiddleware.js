"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
var http_status_1 = __importDefault(require("http-status"));
function errorHandler(error, req, res, next) {
    console.log(error);
    if (error.type === "NotFoundError") {
        return res.status(http_status_1.default.NOT_FOUND).send(error.message);
    }
    return res.status(http_status_1.default.INTERNAL_SERVER_ERROR).send("Perd\u00F3n, algo sali\u00F3 mal\uD83D\uDE1E.");
}
exports.errorHandler = errorHandler;
