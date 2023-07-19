import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../docs/swagger.json';
import routes from './routes/routes';
import morgan from 'morgan';


dotenv.config();
const app: Express = express();
const port = process.env.PORT;

morgan.token('host', function (req: Request, res: Response) {
    return req.hostname;
});

app.use(morgan(':method :host :status :res[content-length] - :response-time ms'));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use("/docs", swaggerUi.serve, async (_req: Request, res: Response) => {
    return res.send(
        swaggerUi.generateHTML(swaggerDocument, { explorer: true })
    );
});

app.listen(port, () => {
    console.log(`⚡️[server]: Esta corriendo en -> 🤠 http://localhost:${port} ⚡️`);
});

