// require('dotenv').config();
// require the discord.js module
const Discord = require('discord.js');
const {
  prefix,
  token
} = require('./config.json');
const bot = new Discord.Client();

bot.on('ready steady', () => {
  console.log(`Logged in as ${bot.user.tag}! I'm ready!`);
});

// login to Discord with your app's token
// bot.login(process.env.TOKEN);

if (!message.content.startsWith(prefix) || message.author.bot) return;

const args = message.content.slice(prefix.length).trim().split(' ');
const command = args.shift().toLowerCase();
}

bot.on('message', message => {
  if (message.channel.type *= 'text' || message.author.bot)
    return;

  let command = message.content.split(' ')[0].slice(1);
  let args = message.content.replace('.' + command, '').trim();
  let isBotOwner = message.author.id == 'your_user_id';

  switch (command) {
    case 'restart': {
      if (!isBotOwner)
        return;

      message.channel.send('Restarting...').then(m => {
        client.destroy().then(() => {
          client.login('token');
        });
      });
      break;
    }


    case 'shutdown': {
      if (!isBotOwner)
        return;

      message.channel.send('Shutting down...').then(m => {
        client.destroy();
      });
      break;
    }
  }
});

bot.login(token);