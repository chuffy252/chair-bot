const Discord = require('discord.js');
const client = new Discord.Client();
var nospam = 0;

client.on('ready', () => {
    console.log('I am ready!');
});



client.on('message', message => {
    if (message.author.username === 'Chuffy') {
        nospam = nospam + 1;
        if(nospam == 5){
            message.reply('i love u chu');
            nospam = 0;
        }
    } 
    if (message.content.substring(0,3) === 'dog'){
        message.react('🐕');
    }
});

var http = require("http");
setInterval(function() {
    http.get("https://chuffy-bot.herokuapp.com/");
}, 300000);

client.login(process.env.BOT_TOKEN);
