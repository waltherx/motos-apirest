"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationInputs = void 0;
var express_validator_1 = require("express-validator");
var http_status_1 = __importDefault(require("http-status"));
var validationInputs = function (req, res, next) {
    var errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        console.log(errors.array().map(function (p) { return console.error(p.msg); }));
        return res.status(http_status_1.default.BAD_REQUEST).json({ errors: errors });
    }
    next();
};
exports.validationInputs = validationInputs;
