"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var os_1 = require("os");
var cors_1 = __importDefault(require("cors"));
var dotenv_1 = __importDefault(require("dotenv"));
var express_1 = __importDefault(require("express"));
var http_1 = require("http");
var morgan_1 = __importDefault(require("morgan"));
var socket_io_1 = require("socket.io");
var routes_1 = __importDefault(require("./routes/routes"));
dotenv_1.default.config();
var app = (0, express_1.default)();
var port = process.env.PORT;
morgan_1.default.token('host', function (req, res) {
    return req.hostname;
});
app.use((0, morgan_1.default)(':method :host :url :status :res[content-length] - :response-time ms'));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(routes_1.default);
var server = (0, http_1.createServer)(app);
var io = new socket_io_1.Server(server);
app.get('/', function (req, res) {
    res.json({ "message": "Hola 😃" });
});
io.on("connection", function () {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i] = arguments[_i];
    }
    console.log(params);
});
server.listen(port, function () {
    console.log("\u26A1\uFE0F[server]: Esta corriendo en -> \uD83E\uDD20 http://".concat((0, os_1.hostname)(), ":").concat(port, " \u26A1\uFE0F"));
});
