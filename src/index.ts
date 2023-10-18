import { hostname } from 'os';
import cors from 'cors';
import dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';
import { createServer } from 'http';
import morgan from 'morgan';
import { Server } from 'socket.io';
import routes from './routes/routes';


dotenv.config();
const app: Express = express();
const port = process.env.PORT;

morgan.token('host', function (req: Request, res: Response) {
    return req.hostname;
});

app.use(morgan(':method :host :url :status :res[content-length] - :response-time ms'));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

const server = createServer(app);
const io = new Server(server);

app.get('/', (req: Request, res: Response) => {
    res.json({ "message": "Hola 😃" });
});

io.on("connection", (...params) => {
    console.log(params);
});

server.listen(port, () => {
    console.log(`⚡️[server]: Esta corriendo en -> 🤠 http://${hostname()}:${port} ⚡️`);
});