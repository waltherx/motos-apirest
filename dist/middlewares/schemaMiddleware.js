"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSchema = void 0;
var http_status_1 = __importDefault(require("http-status"));
function validateSchema(schema) {
    return function (req, res, next) {
        var validation = schema.validate(req.body, { abortEarly: false });
        if (validation.error) {
            var errors = validation.error.details.map(function (detail) { return detail.message; });
            return res.status(http_status_1.default.UNPROCESSABLE_ENTITY).send(errors);
        }
        next();
    };
}
exports.validateSchema = validateSchema;
