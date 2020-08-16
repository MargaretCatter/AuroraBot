const { isOwner, restartBot, shutdownBot } = require('./BotAdmin.js');

const {
  PREFIX,
  BBSISTER
} = process.env;

async function handleMessage(message) {
  let response = '';
  if (!message.content.startsWith(PREFIX) || message.author.bot) return;

  let usr = message.author;
  let command = message.content.slice(PREFIX.length);
  let msgAuthor = usr.id.toString();

  switch (command.toLowerCase()) {
    case 'ownershome':
      repsonse = isOwner(message) ? 'Owner is home' : 'Owner is not home';
      break;

    case 'ping':
      reponse = 'Pong';
      break;

    case 'restart':
      if (!isOwner(message)) {
        response = 'Not the owner';
        break;
      }
      restartBot();
      break;

    case 'shutdown':
      if(isOwner(message)){
        shutdownBot();
      } else {
        response = 'Not the owner';
      }
      break;
    default:
      response = 'Sorry, I need more information';
      break;
  }

  console.log(response);
  return;
};

module.exports = {
  handleMessage,
};
