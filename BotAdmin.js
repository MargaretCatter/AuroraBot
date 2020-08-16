const Discord = require('discord.js');
const { handleMessage } = require('AuroraBot');

const {
  TOKEN,
  BBSISTER
} = process.env;
const bot = new Discord.Client();

function initBot(){
  // login to Discord with your app's token
  bot.login(TOKEN);

  bot.once('ready steady', () => {
    console.log(`Logged in as ${bot.user.tag}! I'm ready!`);
  });

  bot.on('message', handleMessage);
  return;
}

function restartBot(){
  console.log('Restarting. Be Right Back...');
  bot.destroy();
  initBot();
  return;
}

function shutdownBot(){
  console.log('Shutting Down');
  bot.destroy();
  return;
}

function isOwner(message){
  let usr = message.author;
  return usr.id.toString() === BBSISTER;
}

module.exports = {
  initBot,
  isOwner,
  restartBot,
  shutdownBot,
};
