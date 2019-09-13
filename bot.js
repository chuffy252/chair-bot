const Discord = require('discord.js');
const client = new Discord.Client();
var noSpam = false;

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content.toLowerCase().substring(0,3) === 'dog'){
        message.react('🐕');
    }
});

client.on('message', message => {
    if (message.content.toLowerCase().substring(0,8) === ':pepega:'){
        message.reply('is now on the official CSIS watchlist for being a suspected terrorist threat');
    }
});

client.on('message', message => {
    if (message.content.toLowerCase().substring(0,5) === 'hello'){
        message.reply('is currently commiting hate crimes against minorities');
    }
});

client.on('message', message => {
    if(message.content.toLowerCase().substring(0, 7) === 'where u'){
        message.reply('right behind you.');
    }
});




client.on('message', message => {
    if(message.content.toLowerCase().substring(0, 17) === 'i hate you chubot'){
        message.reply('i will literally tear your throat out i swear i dare you to come at me come on you little shit dont act tough online and expect no repercussions huh what you waiting for yeah thats what i thought you absolute loser haha. pathetic.');
    }
});

client.on('message', message => {
    if(message.content.toLowerCase().substring(0, 17) === 'i love you chubot') {
        if(message.author.username === 'Chuffy' | message.author.username === 'minichuffy') {
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
            if(noSpam == false){
               message.reply('shut up');
               noSpam = true;
            }
            else{
                noSpam = false;
            }
        }
});

client.login(process.env.BOT_TOKEN);
