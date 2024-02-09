import * as cron from 'node-cron';
import { getErrorMessage } from '../utils/error.utils';
import TelegramBotHandler from './bootTelegram.core';
import { getAlarmasActivas } from '../services/alarma.service';

const bot = new TelegramBotHandler();

const validarAlarma = async () => {
    try {
        const alarmas = await getAlarmasActivas();

        alarmas.map((a) => {
            console.log( a.devices);
        });

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
const task = cron.schedule('0 */03 * * * *', validarAlarma, {
    scheduled: false,
    timezone: 'America/La_Paz'
});


export default task;