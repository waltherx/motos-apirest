import { Alarma, EstadoAlarma } from '@prisma/client';
import * as cron from 'node-cron';
import { getAllAlarmasActives } from '../services/alarma.service';
import { getErrorMessage } from '../utils/error.utils';
import TelegramBotHandler from './bootTelegram.core';
import { estadoAlarma } from '../utils/constans';

const bot = new TelegramBotHandler();

const validarAlarma = async () => {
    try {
        // Obtiene la fecha y hora actuales
        const ahora = new Date();
        const alarmas = await getAllAlarmasActives();

        alarmas.map((a: Alarma) => {
            console.log(a.inicio);
            console.log(a.fin);
            console.log(a.sucrusal_id);
            if (a.estado == EstadoAlarma.ACTIVADA && ahora >= a.fin) {
                console.log(`La alarma está caducada. Apagando ${a.nombre}.`);
                a.estado = estadoAlarma.Off;
            } else {
                a.estado = estadoAlarma.On;
            }
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