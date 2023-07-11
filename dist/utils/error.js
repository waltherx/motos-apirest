"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFoundError = void 0;
function notFoundError() {
    return {
        type: "NotFoundError",
        message: "Elemento no encontrado!",
    };
}
exports.notFoundError = notFoundError;
