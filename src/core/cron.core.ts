import * as cron from 'node-cron';
import { getErrorMessage } from '../utils/error.utils';
import TelegramBotHandler from './bootTelegram.core';
import { getAllAlarmasActives } from '../services/alarma.service';
import { Alarma, UserAlarma } from '@prisma/client';
import { getAllUserAlarmasActives } from '../services/useralarma.service';

const bot = new TelegramBotHandler();

const validarAlarma = async () => {
    try {
        const alarmas = await getAllUserAlarmasActives();

        alarmas.map((a: UserAlarma) => {
            console.log(a.inicio);
            console.log(a.fin);
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

const task = cron.schedule('0 */03 * * * *', validarAlarma, {
    scheduled: false,
    timezone: 'America/La_Paz'
});

export default task;