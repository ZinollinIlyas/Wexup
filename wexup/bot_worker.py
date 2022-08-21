import telebot
import json

TELEGRAM_BOT_KEY = '5518203361:AAHrh-dVmOp6CX1yQ5TPOWA5xSTncSwY6VQ'

bot = telebot.TeleBot(TELEGRAM_BOT_KEY)


def convert(arr):
    new_arr = arr[0].split(', ')
    text = "\n"
    for item in new_arr:
        text += f"- {item}\n"
    return text


def send_message_to_channel(message):
    print(message["address"])
    text = f'''
Новая Вакансия!!!
    
{message["title"]}
Компания: {message["company"]}

Описание: {message["description"]}
    
Оклад - {message["wage"]}

Требования: {convert(message["requirements"])}

Обязанности: {convert(message["duties"])}

Условия: {convert(message["conditions"])}

Адрес: {message["address"]}

Контакты: {message["contact"]}



'''
    bot.send_message(-1001378290415, text, parse_mode="html")
