const Discord = require('discord.js');

const {
  TOKEN,
  BBSISTER
} = process.env;
let bot;

function initBot(){
  // login to Discord with your app's token
  bot = new Discord.Client();
  bot.login(TOKEN);

  bot.once('ready steady', () => {
    console.log(`Logged in as ${bot.user.tag}! I'm ready!`);
  });
  return bot;
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
