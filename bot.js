const Discord = require('discord.js');
const client = new Discord.Client();
var nospam = 0;

client.on('ready', () => {
    console.log('I am ready!');
});



client.on('message', message => {
    if (message.author.username === 'Chuffy') {
        
        message.reply('i love u chu');
       
    }
});
