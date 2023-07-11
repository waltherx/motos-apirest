"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var path_1 = __importDefault(require("path"));
var dotenv_1 = __importDefault(require("dotenv"));
var swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
var swagger_json_1 = __importDefault(require("../docs/swagger.json"));
var routes_1 = __importDefault(require("./routes/routes"));
dotenv_1.default.config();
var app = (0, express_1.default)();
var port = process.env.PORT;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(routes_1.default);
app.use(express_1.default.static(path_1.default.join(__dirname, '..', 'public')));
/*app.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});*/
app.use('/', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
app.listen(port, function () {
    console.log("\u26A1\uFE0F[server]: Esta corriendo en -> \uD83E\uDD20 http://localhost:".concat(port, " \u26A1\uFE0F"));
});
