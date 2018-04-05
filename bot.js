const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.user.id === '234147989432696832') {
    	message.reply('i love u chu');
  	}
});

client.login(process.env.BOT_TOKEN);
