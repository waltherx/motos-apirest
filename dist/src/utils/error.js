"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getErrorMessage = exports.notFoundError = void 0;
function notFoundError() {
    return {
        type: "NotFoundError",
        message: "Elemento no encontrado!",
    };
}
exports.notFoundError = notFoundError;
function getErrorMessage(error) {
    if (error instanceof Error)
        return error.message;
    return String(error);
}
exports.getErrorMessage = getErrorMessage;
