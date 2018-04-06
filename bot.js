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

var http = require("http");
setInterval(function() {
    http.get("https://git.heroku.com/chuffy-bot.git");
}, 300000);

client.login(process.env.BOT_TOKEN);
