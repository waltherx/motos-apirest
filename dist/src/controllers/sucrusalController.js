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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var sucrusalService_1 = require("../services/sucrusalService");
var http_status_1 = __importDefault(require("http-status"));
var validator_1 = require("../utils/validator");
var router = (0, express_1.Router)();
router.get('/sucrusal', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var sucrusals, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, (0, sucrusalService_1.getAllSucrusals)()];
            case 1:
                sucrusals = _a.sent();
                res.status(http_status_1.default.OK).json(sucrusals);
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                console.error(error_1);
                next(error_1);
                res.status(500).json({ message: "Error fetching data Sucrusal" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
router.get('/sucrusal/:id', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, sucrusal, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = parseInt(req.params.id);
                return [4 /*yield*/, (0, sucrusalService_1.getSucrusal)(id)];
            case 1:
                sucrusal = _a.sent();
                res.status(http_status_1.default.OK).json(sucrusal);
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                console.error(error_2.message);
                next(error_2);
                res.status(http_status_1.default.INTERNAL_SERVER_ERROR).json({ message: "Error Sucrusal" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
router.post('/sucrusal', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var client, newSucrusal, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                client = req.body;
                return [4 /*yield*/, (0, sucrusalService_1.createSucrusal)(client)];
            case 1:
                newSucrusal = _a.sent();
                res.status(http_status_1.default.CREATED).json(newSucrusal);
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                console.error(error_3.message);
                next(error_3);
                res.status(http_status_1.default.INTERNAL_SERVER_ERROR).json({ message: "Error create Sucrusal" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
router.put('/sucrusal/:id', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, client, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = parseInt(req.params.id);
                if (!(0, validator_1.isIdValid)(id))
                    return [2 /*return*/, res.sendStatus(http_status_1.default.BAD_REQUEST)];
                client = req.body;
                return [4 /*yield*/, (0, sucrusalService_1.updateSucrusal)(id, client)];
            case 1:
                _a.sent();
                res.status(http_status_1.default.OK).json({ "message": "Sucrusal actualizado.." });
                return [3 /*break*/, 3];
            case 2:
                error_4 = _a.sent();
                console.error(error_4.message);
                next(error_4);
                res.status(http_status_1.default.INTERNAL_SERVER_ERROR).json({ message: "Error update Sucrusal" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
router.delete('/sucrusal/:id', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = parseInt(req.params.id);
                if (!(0, validator_1.isIdValid)(id))
                    return [2 /*return*/, res.sendStatus(http_status_1.default.BAD_REQUEST)];
                return [4 /*yield*/, (0, sucrusalService_1.deleteSucrusal)(id)];
            case 1:
                _a.sent();
                res.status(http_status_1.default.OK).json({ "message": "Sucrusal eliminado.." });
                return [3 /*break*/, 3];
            case 2:
                error_5 = _a.sent();
                console.error(error_5.message);
                next(error_5);
                res.status(http_status_1.default.INTERNAL_SERVER_ERROR).json({ message: "Error delete Sucrusal" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
exports.default = router;
