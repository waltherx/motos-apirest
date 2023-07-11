"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isIdValid = void 0;
function isIdValid(id) {
    return !isNaN(id) && id > 0;
}
exports.isIdValid = isIdValid;
