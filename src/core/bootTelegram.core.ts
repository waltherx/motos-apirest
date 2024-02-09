import TelegramBot from "node-telegram-bot-api";
import { bootTelegram, groupTelegram } from "../config";

class TelegramBotHandler {
  bot: TelegramBot;
  constructor() {
    this.bot = new TelegramBot(bootTelegram, { polling: true });
  }

  async enviarMensaje(mensaje: string) {
    return await this.bot.sendMessage(groupTelegram, mensaje);
  }
}

export default TelegramBotHandler;
