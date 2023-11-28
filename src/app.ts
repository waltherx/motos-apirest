import cors from 'cors';
import express, { Request, Response } from 'express';
import morgan from 'morgan';
import Logger from './core/Logger';
import routes from './routes/routes';

process.on('uncaughtException', (e) => {
    Logger.error(e);
});

const app = express();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
// Routes
app.use(routes);

morgan.token('host', function (req: Request, res: Response) {
    return req.hostname;
});

app.use(morgan(':remote-user [:date[clf]] :method :host :url :status :res[content-length] - :response-time ms :user-agent'));



app.get('/', (req: Request, res: Response) => {
    res.json({ "message": "Hola 😃" });
});

export default app;
