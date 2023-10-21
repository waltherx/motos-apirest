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
exports.changePassword = exports.signup = exports.login = void 0;
var database_1 = __importDefault(require("../utils/database"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var bcrypt_1 = __importDefault(require("bcrypt"));
var userService_1 = require("./userService");
function login(userIn) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var foundUser, isMatch, token, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, database_1.default.user.findUnique({
                            where: {
                                username: userIn.username
                            }
                        })];
                case 1:
                    foundUser = _b.sent();
                    if (!foundUser) {
                        throw new Error('Nombre de Usuario incorrecto..😪');
                    }
                    isMatch = bcrypt_1.default.compareSync(userIn.password, foundUser.password);
                    if (isMatch) {
                        token = jsonwebtoken_1.default.sign({
                            id: (_a = foundUser.id) === null || _a === void 0 ? void 0 : _a.toString(),
                            username: foundUser.username,
                            realname: foundUser.realname,
                            status: foundUser.status,
                            role: foundUser.role_id
                        }, process.env.JWT_SECRET, {
                            expiresIn: '7 days',
                        });
                        return [2 /*return*/, {
                                user: {
                                    id: foundUser.id,
                                    username: foundUser.username,
                                    role: foundUser.role_id
                                },
                                token: token
                            }];
                    }
                    else {
                        throw new Error('Contraseña incorrecta');
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _b.sent();
                    throw error_1;
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.login = login;
function signup(userIn) {
    return __awaiter(this, void 0, void 0, function () {
        var foundUser, newUser, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    return [4 /*yield*/, database_1.default.user.findUnique({
                            where: {
                                username: userIn.username
                            }
                        })];
                case 1:
                    foundUser = _a.sent();
                    if (!foundUser) return [3 /*break*/, 2];
                    return [2 /*return*/, { "message": "Nombre de Usuario ya existe..😪" }];
                case 2:
                    console.log(userIn);
                    return [4 /*yield*/, (0, userService_1.createUser)(userIn)];
                case 3:
                    newUser = _a.sent();
                    return [2 /*return*/, newUser];
                case 4: return [3 /*break*/, 6];
                case 5:
                    error_2 = _a.sent();
                    throw error_2;
                case 6: return [2 /*return*/];
            }
        });
    });
}
exports.signup = signup;
function changePassword(userIn) {
    return __awaiter(this, void 0, void 0, function () {
        var foundUser, isMatch, new_pass, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 7, , 8]);
                    return [4 /*yield*/, database_1.default.user.findUnique({
                            where: {
                                username: userIn.username
                            }
                        })];
                case 1:
                    foundUser = _a.sent();
                    if (!foundUser) return [3 /*break*/, 5];
                    isMatch = bcrypt_1.default.compareSync(userIn.password_old, foundUser.password);
                    if (!isMatch) return [3 /*break*/, 3];
                    new_pass = foundUser.password = bcrypt_1.default.hashSync(userIn.password_new, 8);
                    return [4 /*yield*/, database_1.default.user.update({
                            where: {
                                id: foundUser.id,
                            },
                            data: {
                                password: new_pass
                            }
                        })];
                case 2: return [2 /*return*/, _a.sent()];
                case 3: return [2 /*return*/, { "message": "La nueva contraseña es igual a la anterior..😪" }];
                case 4: return [3 /*break*/, 6];
                case 5: return [2 /*return*/, { "message": "El nombre de usuario que ingresaste no está registrado..😪" }];
                case 6: return [3 /*break*/, 8];
                case 7:
                    error_3 = _a.sent();
                    throw error_3;
                case 8: return [2 /*return*/];
            }
        });
    });
}
exports.changePassword = changePassword;
