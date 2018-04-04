var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
var msgs = 0;
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    if (message.user == 'Chuffy') {
        msgs++;
    }
    if(msgs = 5)
    {
        msgs = 0;
        bot.sendMessage({
            to: channelID,
            message: 'yeah'
        })
    }
});

bot.login(process.env.BOT_TOKEN)