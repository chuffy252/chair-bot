const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content.toLowerCase().substring(0,3) === 'dog'){
        message.react('🐕');
    }
});

client.on('message', message => {
    if(message.content.toLowerCase().substring(0, 17) === 'i love you chubot') {
        if(message.author.username === 'Chuffy') {
            message.reply('i love u chu');
        }
        else {
            message.reply('shut the fuck up');
        }
    }
});


client.on('message', message => {

        if(message.author.username === 'Catbot') {
            message.reply('shut up');
        }
} 

    




client.login(process.env.BOT_TOKEN);
