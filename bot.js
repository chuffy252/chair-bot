const Discord = require('discord.js');
const client = new Discord.Client();
var noSpam = 0;

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

client.on('message',message => {
  if(message.content.toLowerCase().substring(0,7) === 'goodbye') 
     {
     message.reply('Hello beutiful!!!!! You do want unlimted gems clash of clans gems Real not fake!!!!!! Go bit.ly/gjb276gk/exe58!!!!');

     }
  });

client.on('message', message => {
        if(message.author.username === 'Catbot') {
            if(noSpam < 5){
               message.reply('shut up');
               noSpam++;
            }
            else{
                noSpam = 0;
            }
        }
});

client.login(process.env.BOT_TOKEN);
