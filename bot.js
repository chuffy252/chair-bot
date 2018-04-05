const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

const noSpam = 0;

client.on('message', message => {
    if (message.author.username === 'Chuffy') {
        noSpam;
    }
    if(noSpam == 5){
        message.reply('i love u chu');
        noSpam = 0;
    }
});

client.login(process.env.BOT_TOKEN);
