require('dotenv').config();
const { initBot } = require('./BotAdmin.js');
const {handleMessage} = require('./AuroraBot.js');

bot = initBot();
bot.on('message', handleMessage);
