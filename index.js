// require('dotenv').config();
// require the discord.js module
const Discord = require('discord.js');
const {
  prefix,
  token
} = require('./config.json');
const bot = new Discord.Client();

bot.once('ready steady', () => {
  console.log(`Logged in as ${bot.user.tag}! I'm ready!`);
});

bot.on('message', message => {
  if (message.content === 'ping') {
    // send back "Pong." to the channel the message was sent in
    console.log('Pong.');
  }
  switch () {
    case 'restart': {
      if (!isBotOwner)
        return;
      console.log('Restarting. Be Right Back...').then(m => {
        bot.destroy().then(() => {
          bot.login('token');
        });
      });
      break;
    }
    case 'shutdown': {
      if (!isBotOwner)
        return;
      console.log('Shutting down...').then(m => {
        bot.destroy();
      });
      break;
    }
    default:
      console.log('Sorry, I need more information');
  }
});

// login to Discord with your app's token
bot.login(token);