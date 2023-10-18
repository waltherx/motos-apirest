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
var express_validator_1 = require("express-validator");
var http_status_1 = __importDefault(require("http-status"));
var authMiddleware_1 = require("../middlewares/authMiddleware");
var validateMiddleware_1 = require("../middlewares/validateMiddleware");
var dispositivoService_1 = require("../services/dispositivoService");
var positionService_1 = require("../services/positionService");
var validator_1 = require("../utils/validator");
var router = (0, express_1.Router)();
router.get('/position', authMiddleware_1.auth, function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var positions, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, (0, positionService_1.getAllPositions)()];
            case 1:
                positions = _a.sent();
                res.status(http_status_1.default.OK).json(positions);
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                console.error(error_1);
                next(error_1);
                res.status(500).json({ message: "Error fetching data Position" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
router.get('/position/moto/:id', authMiddleware_1.auth, function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, positions, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = parseInt(req.params.id);
                return [4 /*yield*/, (0, positionService_1.getPositionDispositivo)(id)];
            case 1:
                positions = _a.sent();
                res.status(http_status_1.default.OK).json(positions);
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                console.error(error_2.message);
                next(error_2);
                res.status(http_status_1.default.INTERNAL_SERVER_ERROR).json({ message: "Error Position" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
router.get('/position/last/:id', authMiddleware_1.auth, (0, express_validator_1.check)("id", "Ingresa un ID valido").isNumeric().notEmpty().isLength({ min: 1 }), validateMiddleware_1.validationInputs, function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, position, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = parseInt(req.params.id);
                return [4 /*yield*/, (0, positionService_1.getPositionLast)(id)];
            case 1:
                position = _a.sent();
                console.log(position);
                res.status(http_status_1.default.OK).json(position);
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                console.error(error_3.message);
                next(error_3);
                res.status(http_status_1.default.INTERNAL_SERVER_ERROR).json({ message: "Error Position" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
router.get('/position/:id/limit/:limit', authMiddleware_1.auth, (0, express_validator_1.check)("id", "Ingresa un ID valido").isNumeric().notEmpty().isLength({ min: 1 }), (0, express_validator_1.check)("limit", "Ingresa un Limite valido").isNumeric().notEmpty().isLength({ min: 1 }), validateMiddleware_1.validationInputs, function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, limit, position, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = parseInt(req.params.id);
                limit = parseInt(req.params.limit);
                return [4 /*yield*/, (0, positionService_1.getPositionLimit)(id, limit)];
            case 1:
                position = _a.sent();
                res.status(http_status_1.default.OK).json(position);
                return [3 /*break*/, 3];
            case 2:
                error_4 = _a.sent();
                console.error(error_4.message);
                next(error_4);
                res.status(http_status_1.default.INTERNAL_SERVER_ERROR).json({ message: "Error Position" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
router.post('/position', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var position, dispositivo, newPosition, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                position = req.body;
                return [4 /*yield*/, (0, dispositivoService_1.getDispositivoSerial)(position.dispositivo_id.toString())];
            case 1:
                dispositivo = _a.sent();
                position.dispositivo_id = dispositivo.id;
                return [4 /*yield*/, (0, positionService_1.createPosition)(position)];
            case 2:
                newPosition = _a.sent();
                res.status(http_status_1.default.CREATED).json(newPosition);
                return [3 /*break*/, 4];
            case 3:
                error_5 = _a.sent();
                console.error(error_5.message);
                next(error_5);
                res.status(http_status_1.default.INTERNAL_SERVER_ERROR).json({ message: "Error create Position" });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
router.put('/position/:id', authMiddleware_1.auth, function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, client, error_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = parseInt(req.params.id);
                if (!(0, validator_1.isIdValid)(id))
                    return [2 /*return*/, res.sendStatus(http_status_1.default.BAD_REQUEST)];
                client = req.body;
                return [4 /*yield*/, (0, positionService_1.updatePosition)(id, client)];
            case 1:
                _a.sent();
                res.status(http_status_1.default.OK).json({ "message": "Position actualizado.." });
                return [3 /*break*/, 3];
            case 2:
                error_6 = _a.sent();
                console.error(error_6.message);
                next(error_6);
                res.status(http_status_1.default.INTERNAL_SERVER_ERROR).json({ message: "Error update Position" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
router.delete('/position/:id', authMiddleware_1.auth, function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, error_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = parseInt(req.params.id);
                if (!(0, validator_1.isIdValid)(id))
                    return [2 /*return*/, res.sendStatus(http_status_1.default.BAD_REQUEST)];
                return [4 /*yield*/, (0, positionService_1.deletePosition)(id)];
            case 1:
                _a.sent();
                res.status(http_status_1.default.OK).json({ "message": "Position eliminado.." });
                return [3 /*break*/, 3];
            case 2:
                error_7 = _a.sent();
                console.error(error_7.message);
                next(error_7);
                res.status(http_status_1.default.INTERNAL_SERVER_ERROR).json({ message: "Error delete Position" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
exports.default = router;
