import * as cron from 'node-cron';
import prisma from '../utils/database';
import { getErrorMessage } from '../utils/error';
import TelegramBotHandler from './BootTelegram';

const bot = new TelegramBotHandler();

const validarAlarma = async () => {
    try {
        const alarmas = await prisma.alarma.findMany();

        

        bot
            .enviarMensaje(JSON.stringify(alarmas))
            .then(() => {
                console.log("Mensaje enviado correctamente");
            })
            .catch((error) => {
                console.log("Error al enviar el mensaje:  " + error);
            });
    } catch (e) {
        console.error(getErrorMessage(e));
    }
}

//'0 */15 * * * *' 15 minutos
//*/10 * * * * *  10 segundos
const task = cron.schedule('0 */15 * * * *', validarAlarma, {
    scheduled: false,
    timezone: 'America/La_Paz'
});


export default task;