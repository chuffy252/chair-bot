const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.user == 'Chuffy') {
    	message.reply('ok');
  	}
});

client.login(process.env.BOT_TOKEN);
