import TelegramBot from "node-telegram-bot-api";
import { bootTelegram, groupTelegram } from "../config/config";

class TelegramBotHandler {
  bot: TelegramBot;
  constructor() {
    this.bot = new TelegramBot(bootTelegram, { polling: false });
    //this.bot.setWebHook('');
  }

  async enviarMensaje(mensaje: string) {
    return await this.bot.sendMessage(groupTelegram, mensaje);
  }
}

export default TelegramBotHandler;
