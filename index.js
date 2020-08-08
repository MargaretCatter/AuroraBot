// require('dotenv').config();
// require the discord.js module
const Discord = require('discord.js');

const {
  prefix,
  token,
  BBSister
} = require('./config.json');
const bot = new Discord.Client();

bot.once('ready steady', () => {
  console.log(`Logged in as ${bot.user.tag}! I'm ready!`);
});

bot.on('message', async (message) => {
  // Olivia edited this
  let usr = message.author;
  let isBotOwner = usr.id.toString() === BBSister;
  let command = message.content.slice(prefix.length);
  let msgAuthor = usr.id.toString();
  //message.reply(`comparing ${msgAuthor} and ${BBSister}`);


  if (!isBotOwner) return;

  if (command === 'ownershome')
    if (!isBotOwner)
      return;
  console.log(command);

  if (command === 'ping')
    // send back "Pong!" to the console
    console.log('Pong!');
  return;

  switch (command) {
    case 'restart':
      if (!isBotOwner) {
        console.log('Not the owner');
        return;
      }

      console.log('Restarting. Be Right Back...');
      await bot.destroy();
      await bot.login(token);
      return;
    case 'shutdown':
      if (!isBotOwner) {
        console.log('Not the owner');
        return;
      }

      console.log('Shutting down...');
      await bot.destroy();
      return;
    default:
      console.log('Sorry, I need more information');
      return;
  } /* */
});

// login to Discord with your app's token
bot.login(token);