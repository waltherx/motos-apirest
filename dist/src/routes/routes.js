"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var clientController_1 = __importDefault(require("../controllers/clientController"));
var motoController_1 = __importDefault(require("../controllers/motoController"));
var positionController_1 = __importDefault(require("../controllers/positionController"));
var userController_1 = __importDefault(require("../controllers/userController"));
var roleController_1 = __importDefault(require("../controllers/roleController"));
var menuController_1 = __importDefault(require("../controllers/menuController"));
var sucrusalController_1 = __importDefault(require("../controllers/sucrusalController"));
var userSucrusalController_1 = __importDefault(require("../controllers/userSucrusalController"));
var api = (0, express_1.Router)()
    .use(clientController_1.default)
    .use(motoController_1.default)
    .use(positionController_1.default)
    .use(userController_1.default)
    .use(roleController_1.default)
    .use(menuController_1.default)
    .use(sucrusalController_1.default)
    .use(userSucrusalController_1.default);
exports.default = (0, express_1.Router)().use('/api', api);
